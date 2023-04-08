import React, { useCallback, useEffect, useState } from 'react';
import Spell, { iSpell } from './Spell';
import Loading from '../../components/Loading/Loading';
import BlockLayout from '../../components/Layouts/BlockLayout';
import { TextField } from '@material-ui/core';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';

const ListOfSpells: React.FC = () => {
    const [search, setSearch] = useState('');
    const [spells, setSpells] = useState<iSpell[]>([]);
    
    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    useEffect(() => {
        const fetchSpells = async () => {
        try {
            const response = await fetch('https://www.dnd5eapi.co/api/spells');
            const data = await response.json();
            setSpells(data.results);
        } catch (error) {
            console.error(error);
        }
        };
        fetchSpells();
    }, []);

    if (spells.length === 0) {
        return <Loading />;
    }

    return (
        <ColumnLayout style={{ padding: 16 }}>
            <Headline size={1}>List of 5e Spells</Headline>
            <TextField
                onChange={onChange}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {spells.filter((spell: iSpell) => {
                    if (search === "") return true;
                    if (!spell) return false;
                    const regex = new RegExp(`${search}`, 'gmi');
                    const match = regex.test(spell.name);
                    return match;
                }).map(spell => (
                    <Spell spellName={spell.index} />
                ))}
            </BlockLayout>
        </ColumnLayout>
    );
};

export default ListOfSpells;
