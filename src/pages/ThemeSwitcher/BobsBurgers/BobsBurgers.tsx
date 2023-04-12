import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ColumnLayout from '../../../components/Layouts/ColumnLayout';
import Headline from '../../../components/Text/Headline';
import BlockLayout from '../../../components/Layouts/BlockLayout';
import ImageVideo from '../../../components/ImageVideo';
import { TextField } from '@material-ui/core';
import RowLayout from '../../../components/Layouts/RowLayout';
import Loading from '../../../components/Loading/Loading';
import stringUtils from '../../../utils/stringUtils';
import { ValueLabel } from '../../FifthEdition/DnDMain';

interface Character {
    id: number;
    name: string;
    image: string;
    gender: string;
    age: number;
    occupation: string;
    likes: string;
    dislikes: string;
    relatives: any[];
    voicedBy: string;
    firstAppearance: string;
    description: string;
    trivia: string;
} 

const BobsBurgers = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);

    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);
    
    useEffect(() => {
        setLoading(true);
        try {
            fetch('https://bobsburgers-api.herokuapp.com/characters/')
            .then(response => response.json())
            .then(data => {
                setCharacters(data)
            });
        } catch (e: any) {
            console.error(e?.message || e);
        } finally {
            setLoading(false);
        }
    }, []);
    const content = useMemo(() => {
        if (loading) return <Loading />;
        if (!characters || characters.length === 0) return null;
        return characters.filter((character: Character) => {
            if (search === "") return true;
            if (!character) return false;
            const regex = new RegExp(`${search}`, 'gmi');
            const match = regex.test(character.name);
            return match;
        }).map((character) => {
            const label = search ? stringUtils.highlight(character.name, search) : character.name;
            return (
                <RowLayout className="flexSB" isCard key={character.id} noWrapping>
                    <ColumnLayout style={{ width: 'fit-content' }}>
                        <Headline size={2}>{label}</Headline>
                        <ValueLabel label="Gender: " value={character.gender} />
                        <ValueLabel label="Age: " value={character.age} />
                        <ValueLabel label="Occupation: " value={character.occupation} />
                        <ValueLabel label="Voice Actor: " value={character.voicedBy} />
                        <ValueLabel label="First Appearance: " value={character.firstAppearance} />
                        <ValueLabel label="Description: " value={character.description} />
                        <ValueLabel label="Trivia: " value={character.trivia} />
                        <ValueLabel label="Likes: " value={character.likes} />
                        <ValueLabel label="Dislikes: " value={character.dislikes} />
                    </ColumnLayout>
                    
                    {/* {character.relatives && <Body>Relatives: {character.relatives}</Body>} This is an array */}
                    <ImageVideo src={character.image} alt={character.name} maxHeight="280px" height="280px" maxWidth="180px" style={{ border: '2px solid #333', borderRadius: 8, overflow: 'hidden'}}/>
                </RowLayout>
            )
        });
    }, [
        characters,
        loading,
        search
    ]);

    return (
        <ColumnLayout style={{ padding: 16 }}>
            <Headline size={1}>Bob's Burgers Characters:</Headline>
            <TextField
                onChange={onChange}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {content}
            </BlockLayout>
        </ColumnLayout>
    );
};

export default BobsBurgers;

  