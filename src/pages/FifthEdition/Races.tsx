import React, { useState } from 'react';
import { iRace } from './DndInterfaces';
import BlockLayout from '../../components/Layouts/BlockLayout';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Loading from '../../components/Loading/Loading';
import Headline from '../../components/Text/Headline';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const Races = ({
    races
}: any) => {
    const [selectedTab, setSelectedTab] = useState(races[0].name);

    return (
        <ColumnLayout>
            <Headline size={1}>Races</Headline>
            <FormControl className="jdgd-input" fullWidth>
                <InputLabel id="rule-select-label">Level</InputLabel>
                <Select
                    labelId='rule-select-label'
                    id="rule-select"
                    value={selectedTab}
                    label="Class"
                    onChange={(e: any) => setSelectedTab(e?.target?.value)}
                >
                    {races.map((i: any) => <MenuItem key={`${i.name}-option`} value={i.name}>{i.name}</MenuItem>)}    
                </Select>
            </FormControl>
            <ColumnLayout>
                {races.filter((r: iRace) => r.name === selectedTab).map((race: iRace) => (
                    <ColumnLayout isCard key={race.name}>
                        <h2>{race.name}</h2>
                        {race.speed && <p>Speed: {race.speed}</p>}
                        {race.ability_bonuses && (
                        <div>
                            <p>Ability Bonuses:</p>
                            <ul>
                            {race.ability_bonuses.map((abilityBonus) => (
                                <li key={abilityBonus.name}>
                                {abilityBonus.name}: {abilityBonus.bonus}
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}
                        {race.alignment && <p>Alignment: {race.alignment}</p>}
                        {race.age && <p>Age: {race.age}</p>}
                        {race.size && <p>Size: {race.size}</p>}
                        {race.size_description && (
                        <p>Size Description: {race.size_description}</p>
                        )}
                        {race.starting_proficiencies && (
                        <div>
                            <p>Starting Proficiencies:</p>
                            <ul>
                            {race.starting_proficiencies.map((startingProficiency) => (
                                <li key={startingProficiency.name}>
                                {startingProficiency.name}
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}
                        {race.languages && (
                        <div>
                            <p>Languages:</p>
                            <ul>
                            {race.languages.map((language) => (
                                <li key={language.name}>{language.name}</li>
                            ))}
                            </ul>
                        </div>
                        )}
                        {race.language_desc && (
                        <p>Language Description: {race.language_desc}</p>
                        )}
                        {race.traits && (
                        <div>
                            <p>Traits:</p>
                            <ul>
                            {race.traits.map((trait) => (
                                <li key={trait.name}>
                                {trait.name}: {trait.desc}
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}
                        {race.subraces && race.subraces.length > 0 && (
                        <div>
                            <p>Subraces:</p>
                            <ul>
                            {race.subraces.map((subrace) => (
                                <li key={subrace.name}>
                                <h3>{subrace.name}</h3>
                                <p>{subrace.desc}</p>
                                </li>
                            ))}
                            </ul>
                        </div>
                        )}
                    </ColumnLayout>
                ))}
            </ColumnLayout>
        </ColumnLayout>
    );
};
export default Races;
     
