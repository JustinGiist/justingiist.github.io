import React, { useCallback, useEffect, useState } from 'react';
import Spell, { iSpell } from './Spell';
import Loading from '../../components/Loading/Loading';
import BlockLayout from '../../components/Layouts/BlockLayout';
import { TextField } from '@material-ui/core';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import stringUtils from '../../utils/stringUtils';
import RowLayout from '../../components/Layouts/RowLayout';
import Pill from '../../components/Pill/Pill';
import ReactTooltip from 'react-tooltip';
import { DndAPIResult } from './DndInterfaces';

export const getSchoolColor = (schoolName: string) => {
    switch (schoolName) {
        case 'Abjuration':
            return 0;
        case 'Conjuration':
            return 1;
        case 'Divination':
            return 2;
        case 'Enchantment':
            return 3;
        case 'Evocation':
            return 4;
        case 'Illusion':
            return 5;
        case 'Necromancy':
            return 6;
        case 'Transmutation':
            return 7;
    };
    return 0;
}

interface iMagicSchool extends DndAPIResult {
    desc?: string;
}

const MagicSchools: React.FC = () => {
    const [search, setSearch] = useState('');
    const [magicSchools, setMagicSchools] = useState<iMagicSchool[]>([]);
    const [categories, setCategories] = useState<DndAPIResult[]>([]);
    const [spells, setSpells] = useState<iSpell[]>([]);
    const [spellMap, setSpellMap] = useState<Map<string, iSpell> | undefined>();

    const handleCategory = useCallback((school: DndAPIResult) => {
        const alreadyExists = categories.find(i => i.index === school.index);
        if (alreadyExists) {
            setCategories(prev => prev.filter(i => i.index !== school.index));
        } else {
            setCategories(prev => ([
                ...prev,
                school
            ]));
        }
    }, [
        categories
    ]);
    
    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    useEffect(() => {
        const fetchMagicSchool = async (schoolName: string) => {
          try {
            const response = await fetch(`https://www.dnd5eapi.co/api/magic-schools/${schoolName}`);
            if (response?.status === 404) throw new Error();
            const data = await response.json();
            return data;
          } catch (error) {
            console.error(error);
          }
        };
        const fetchMagicSchools = async () => {
            try {
                const response = await fetch('https://www.dnd5eapi.co/api/magic-schools');
                const data = await response.json();
                const getAllSchoolData = async () => {
                    const promises: any[] = [];
                    data.results.forEach((spellResponse: DndAPIResult) => {
                        promises.push(fetchMagicSchool(spellResponse.index));
                    });
                    return Promise.all(promises);
                };
                const schoolResults = await getAllSchoolData();
                setMagicSchools(schoolResults);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMagicSchools();
        const fetchSpell = async (spellName: string) => {
          try {
            const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellName}`);
            if (response?.status === 404) throw new Error();
            const data = await response.json();
            return data;
          } catch (error) {
            console.error(error);
          }
        };
        const fetchSpells = async () => {
            try {
                const response = await fetch('https://www.dnd5eapi.co/api/spells');
                const data = await response.json();
                const results = data.results;
                setSpells(results);
                const getAllSpellData = async () => {
                    const promises: any[] = [];
                    results.forEach((spellResponse: DndAPIResult) => {
                        promises.push(fetchSpell(spellResponse.index));
                    });
                    return Promise.all(promises);
                };
                const spellResults = await getAllSpellData();
                const newSpellMap = new Map();
                spellResults.forEach(spell => newSpellMap.set(spell.index, spell));
                setSpellMap(newSpellMap);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSpells();
    }, []);

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    if (magicSchools.length === 0) {
        return <Loading />;
    }

    return (
        <ColumnLayout style={{ padding: '12px 16px 60px' }}>
            <Headline size={1}>Magic Schools</Headline>
            <RowLayout>
                {magicSchools.map((school, i) => {
                    const isSelected = categories.filter(cat => cat.name === school.name).length > 0;
                    return (
                        <Pill 
                            id={school.index} 
                            key={school.index} 
                            tooltip={school.desc}
                            isSelected={isSelected} 
                            label={school.name} 
                            onClick={() => handleCategory(school)} 
                            index={i}
                        />
                    );
                })}
            </RowLayout>
            <TextField
                onChange={onChange}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {!spellMap ? <Loading /> : spells.filter((spell: iSpell) => { // Filter by category
                    if (!categories || categories.length === 0) return true; 
                    const spellCategory = spellMap.get(spell.index)?.school?.name;
                    if (!spellCategory) return false;
                    const showSpell = categories.filter(cat => cat.name === spellCategory).length > 0;
                    return showSpell;
                }).filter((spell: iSpell) => { // Filter by search
                    if (search === "") return true;
                    if (!spell) return false;
                    const regex = new RegExp(`${search}`, 'gmi');
                    const match = regex.test(spell.name);
                    return match;
                }).map(spell => {
                    const spellInfo = spellMap.get(spell.index);
                    return (
                        <Spell key={spell.index} categories={categories} spellInfo={spellInfo} search={search} />
                    );
                })}
            </BlockLayout>
        </ColumnLayout>
    );
};

export default MagicSchools;