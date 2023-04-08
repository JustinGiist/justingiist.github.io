import React, { useState, useEffect, useCallback } from 'react';
import ColumnLayout from '../../../components/Layouts/ColumnLayout';
import Headline from '../../../components/Text/Headline';
import BlockLayout from '../../../components/Layouts/BlockLayout';
import ImageVideo from '../../../components/ImageVideo';
import { TextField } from '@material-ui/core';
import RowLayout from '../../../components/Layouts/RowLayout';
import Body from '../../../components/Text/Body';

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
    const [search, setSearch] = useState<string>("");
    const [characters, setCharacters] = useState<Character[]>([]);

    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);
    
    useEffect(() => {
        fetch('https://bobsburgers-api.herokuapp.com/characters/')
        .then(response => response.json())
        .then(data => {
            setCharacters(data)
        });
    }, []);

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
                {characters && characters.length > 0 && characters.filter((character: Character) => {
                    if (search === "") return true;
                    if (!character) return false;
                    const regex = new RegExp(`${search}`, 'gmi');
                    const match = regex.test(character.name);
                    return match;
                }).map((character) => (
                    <RowLayout className="flexSB" isCard key={character.id} noWrapping>
                        <ColumnLayout style={{ width: 'fit-content' }}>
                            <Headline size={2}>{character.name}</Headline>
                            <Body>Gender: {character.gender}</Body>
                            {character.age && <Body>Age: {character.age}</Body>}
                            {character.occupation && <Body>Occupation: {character.occupation}</Body>}
                            {character.voicedBy && <Body>Voice Actor: {character.voicedBy}</Body>}
                            {character.firstAppearance && <Body>First Appearance: {character.firstAppearance}</Body>}
                            {character.description && <Body>Description: {character.description}</Body>}
                            {character.trivia && <Body>Trivia: {character.trivia}</Body>}
                            {character.likes && <Body>Likes: {character.likes}</Body>}
                            {character.dislikes && <Body>Dislikes: {character.dislikes}</Body>}
                        </ColumnLayout>
                        
                        {/* {character.relatives && <Body>Relatives: {character.relatives}</Body>} This is an array */}
                        <ImageVideo src={character.image} alt={character.name} maxHeight="280px" height="280px" maxWidth="180px" style={{ border: '2px solid #333', borderRadius: 8, overflow: 'hidden'}}/>
                    </RowLayout>
                ))}
            </BlockLayout>
        </ColumnLayout>
    );
};

export default BobsBurgers;

  