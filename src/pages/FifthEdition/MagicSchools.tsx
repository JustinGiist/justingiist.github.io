import { useCallback, useEffect, useState } from 'react';
import Spell from './Spell';
import Loading from '../../components/Loading/Loading';
import BlockLayout from '../../components/Layouts/BlockLayout';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import RowLayout from '../../components/Layouts/RowLayout';
import ReactTooltip from 'react-tooltip';
import { iSpell } from './DndInterfaces';
import stringUtils from '../../utils/stringUtils';

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

const MagicSchools = ({
    magicSchools,
    spells,
    spellMap,
    durations
}: any) => {
    const [search, setSearch] = useState('');
    const [selectedSchool, setSelectedCategory] = useState<string>('None');
    const [selectedLevel, setSelectedLevel] = useState<string>('None');
    const [selectedDuration, setSelectedDuration] = useState<string>('None');

    const handleCategory = useCallback((e: any) => {
        setSelectedCategory(e.target.value)
    }, []);

    const handleLevel = useCallback((e: any) => {
        setSelectedLevel(e.target.value)
    }, []);

    const handleDuration = useCallback((e: any) => {
        setSelectedDuration(e.target.value)
    }, []);
    
    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    return (
        <ColumnLayout>
            <Headline size={1}>Magic Schools</Headline>
            <RowLayout>
                <FormControl className="jdgd-input">
                    <InputLabel id="magic-school-select-label">Magic School</InputLabel>
                    <Select
                        labelId='magic-school-select-label'
                        id="magic-school-select"
                        value={selectedSchool}
                        label="Age"
                        onChange={handleCategory}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {!magicSchools ? <Loading /> : magicSchools.map((school: any, i: number) => <MenuItem value={school.index}>{school.name}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className="jdgd-input">
                    <InputLabel id="level-select-label">Level</InputLabel>
                    <Select
                        labelId='level-select-label'
                        id="level-select"
                        value={selectedLevel}
                        label="Age"
                        onChange={handleLevel}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {!magicSchools ? <Loading /> : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => <MenuItem key={`${level}-option`} value={level}>{level.toString()}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl className="jdgd-input">
                    <InputLabel id="duration-select-label">Duration</InputLabel>
                    <Select
                        labelId='duration-select-label'
                        id="duration-select"
                        value={selectedDuration}
                        label="Age"
                        onChange={handleDuration}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {!durations || !magicSchools ? <Loading /> : durations.map((duration: string) => <MenuItem key={`${duration}-option`} value={duration}>{duration}</MenuItem>)}
                    </Select>
                </FormControl>
            </RowLayout>
            <TextField
                onChange={onChange}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {!spellMap || !spells ? <Loading /> : spells.filter((spell: iSpell) => { // Filter by category
                    if (!selectedSchool || selectedSchool === 'None') return true; 
                    const spellCategory = spellMap.get(spell.index)?.school?.index;
                    if (!spellCategory) return false;
                    return selectedSchool === spellCategory;
                }).filter((spell: iSpell) => { // Filter by category
                    if (selectedLevel === 'None') return true; 
                    const spellLevel = spellMap.get(spell.index)?.level;
                    return selectedLevel === spellLevel;
                })
                .filter((s: iSpell) => stringUtils.filterBySearch(spellMap.get(s.index)?.duration, selectedDuration === 'None' ? '' : selectedDuration, true))
                .filter((s: iSpell) => stringUtils.filterBySearch(s.name, search))
                .map((spell: iSpell) => {
                    const spellInfo = spellMap.get(spell.index);
                    return (
                        <Spell 
                            key={spell.index} 
                            selectedSchool={selectedSchool} 
                            selectedLevel={selectedLevel}
                            selectedDuration={selectedDuration} 
                            spellInfo={spellInfo} 
                            search={search} 
                        />
                    );
                })}
            </BlockLayout>
        </ColumnLayout>
    );
};

export default MagicSchools;