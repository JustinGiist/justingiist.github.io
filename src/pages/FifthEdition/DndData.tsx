import { useEffect, useState, useCallback } from 'react';
import { DndAPIResult, Monster, getDndUrl, iMagicSchool, iSpell } from './DndInterfaces';

const resolveAllDndPromises = async (array: any[], fetchMethod: any) => {
    const promises: any[] = [];
    array.forEach((response: DndAPIResult) => {
        promises.push(fetchMethod(response.index));
    });
    return Promise.all(promises);
};

const fetchDndRequest = async (url: string) => {
    try {
        const response = await fetch(getDndUrl(url));
        if (response?.status === 404) throw new Error();
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
};

const fetchAllDndRequest = async (url: string) => {
    try {
        const response = await fetch(getDndUrl(url));
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
    }
}

const DndData = () => {
    const [monsters, setMonsters] = useState<Monster[] | undefined>(undefined);
    const [monsterTypes, setMonsterTypes] = useState<string[] | undefined>(undefined);
    const [magicSchools, setMagicSchools] = useState<iMagicSchool[] | undefined>(undefined);
    const [spells, setSpells] = useState<iSpell[] | undefined>(undefined);
    const [spellMap, setSpellMap] = useState<Map<string, iSpell> | undefined>(undefined);
    const [classes, setClasses] = useState<any[] | undefined>(undefined);
    const [equipments, setEquipments] = useState<any[] | undefined>(undefined);
    const [equipmentCategories, setEquipmentCategories] = useState<any[] | undefined>(undefined);
    const [currencyTypes] = useState<string[] | undefined>(['Cp', 'Sp', 'Gp']);
    const [races, setRaces] = useState<any[] | undefined>(undefined);
    const [rules, setRules] = useState<any[] | undefined>(undefined);
    
    // Monsters
    const fetchMonster = useCallback(async (monsterName: string) => fetchDndRequest(`/api/monsters/${monsterName}`), []);
    const fetchMonsters = useCallback(async () => {
        const results = await fetchAllDndRequest(`/api/monsters`);
        const monsterResults = await resolveAllDndPromises(results, fetchMonster);
        const listOfTypes: string[] = [];
        await monsterResults.forEach((m) => {
            const alreadyExists = listOfTypes.find(i => i === m.type);
            if (alreadyExists) return;
            listOfTypes.push(m.type);
        });
        setMonsterTypes(listOfTypes);
        setMonsters(monsterResults);
    }, [fetchMonster]);

    useEffect(() => {
        fetchMonsters();
    }, [fetchMonsters]);

    // Magic Schools
    const fetchMagicSchool = useCallback(async (schoolName: string) => fetchDndRequest(`/api/magic-schools/${schoolName}`), []);
    const fetchMagicSchools = useCallback(async () => {
        const results = await fetchAllDndRequest(`/api/magic-schools`);
        const schoolResults = await resolveAllDndPromises(results, fetchMagicSchool);
        setMagicSchools(schoolResults);
    }, [fetchMagicSchool]);

    useEffect(() => {
        fetchMagicSchools();
    }, [fetchMagicSchools]);

    // Spells
    const fetchSpell = useCallback(async (spellName: string) => fetchDndRequest(`/api/spells/${spellName}`), []);
    const fetchSpells = useCallback(async () => {
        try {
            const results = await fetchAllDndRequest(`/api/spells`);
            setSpells(results);
            const spellResults = await resolveAllDndPromises(results, fetchSpell);
            const newSpellMap = new Map();
            spellResults.forEach(spell => newSpellMap.set(spell.index, spell));
            setSpellMap(newSpellMap);
        } catch (error) {
            console.error(error);
        }
    }, [fetchSpell]);

    useEffect(() => {
        fetchSpells();
    }, [fetchSpells]);

    // Classes
    const fetchClass = useCallback(async (s: string) => fetchDndRequest(`/api/classes/${s}`), []);
    const fetchClasses = useCallback(async () => {
        const results = await fetchAllDndRequest(`/api/classes`);
        const classResults = await resolveAllDndPromises(results, fetchClass);
        setClasses(classResults);
    }, [fetchClass]);

    useEffect(() => {
        fetchClasses();
    }, [fetchClasses]);

    // Equipment
    const fetchEquipment = useCallback(async (s: string) => fetchDndRequest(`/api/equipment/${s}`), []);
    const fetchEquipments = useCallback(async () => {
        const results = await fetchAllDndRequest(`/api/equipment`);
        const eResults = await resolveAllDndPromises(results, fetchEquipment);
        const listOfTypes: string[] = [];
        await eResults.forEach((m) => {
            const alreadyExists = listOfTypes.find(i => i === m.equipment_category.name);
            if (alreadyExists) return;
            listOfTypes.push(m.equipment_category.name);
        });
        setEquipmentCategories(listOfTypes);
        setEquipments(eResults);
    }, [fetchEquipment]);

    useEffect(() => {
        fetchEquipments();
    }, [fetchEquipments]);

    // Races
    const fetchRace = useCallback(async (s: string) => fetchDndRequest(`/api/races/${s}`), []);
    const fetchRaces = useCallback(async () => {
        const results = await fetchAllDndRequest(`/api/races`);
        const rResults = await resolveAllDndPromises(results, fetchRace);
        setRaces(rResults);
    }, [fetchRace]);

    useEffect(() => {
        fetchRaces();
    }, [fetchRaces]);

    // Rules
    const fetchRule = useCallback(async (s: string) => fetchDndRequest(`/api/rules/${s}`), []);
    const fetchRules = useCallback(async () => {
        const results = await fetchAllDndRequest(`/api/rules`);
        const rResults = await resolveAllDndPromises(results, fetchRule);
        setRules(rResults);
    }, [fetchRule]);

    useEffect(() => {
        fetchRules();
    }, [fetchRules]);

    return ({
        monsters,
        monsterTypes,
        magicSchools,
        spells,
        spellMap,
        classes,
        equipments,
        races,
        rules,
        currencyTypes,
        equipmentCategories
    });
}

export default DndData;