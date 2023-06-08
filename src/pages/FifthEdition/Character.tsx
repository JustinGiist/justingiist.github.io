import { useCallback, useState } from 'react';
import ColumnLayout from "../../components/Layouts/ColumnLayout"
import Headline from '../../components/Text/Headline';
import FormLayout from '../../components/Layouts/FormLayout';
import InputWrapper from '../../components/FormComponents/InputWrapper';
import { MenuItem, Select, TextField } from '@material-ui/core';
import Loading from '../../components/Loading/Loading';
import { iRace } from './DndInterfaces';

const Character = ({
    conditions,
    equipments,
    classes,
    magicSchools,
    spells,
    spellMap,
    races
}: any) => {
    const [formData, setFormData] = useState<any>({
        characterName: '',
        level: 1,
        strength: 1,
        dexterity: 1,
        constitution: 1,
        intelligence: 1,
        wisdom: 1,
        charisma: 1
    });
    const [undoState] = useState<any>(formData); // set inital state to forms initial state
    const [disabledFields, setDisabledFields] = useState<any>();
    const [errorFields, setErrorFields] = useState<any>();

    const onSubmit = useCallback((data: any) => {
        debugger;
        console.debug(formData);
    }, [formData]);
  
    return (
        <ColumnLayout>
            <Headline size={1}>Character Creator</Headline>
            <FormLayout
                formData={formData}
                handleFormData={setFormData}
                onSubmit={onSubmit}
                disabledFields={disabledFields}
                handleDisabled={setDisabledFields}
                errorFields={errorFields}
                handleErrors={setErrorFields}
                undoState={undoState}
                layoutClass="flex-block"
            >
                <InputWrapper
                    label="Character Name"
                    field="characterName"
                    className="jdgd-input"
                    // multiline={true}
                    // minRows={1}
                    // maxRows={4}
                >
                    <TextField variant="outlined" />
                </InputWrapper>

                <InputWrapper
                    label="Class"
                    field="class"
                    className="jdgd-input"
                >
                    <Select variant="outlined">
                        {!classes ? <Loading /> : classes.map((i: any) => <MenuItem key={`${i.name}-option`} value={i.name}>{i.name}</MenuItem>)}
                    </Select>
                </InputWrapper>
                
                <InputWrapper
                    label="Level"
                    field="level"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>

                <InputWrapper
                    label="Race"
                    field="race"
                    className="jdgd-input"
                >
                    <Select variant="outlined">
                        {!races ? <Loading /> : races.map((race: iRace) => <MenuItem key={`${race.name}-option`} value={race.name}>{race.name}</MenuItem>)}
                    </Select>
                </InputWrapper>
                
                <InputWrapper
                    label="Strength"
                    field="strength"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>
                
                <InputWrapper
                    label="Dexterity"
                    field="dexterity"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>
                
                <InputWrapper
                    label="Constitution"
                    field="constitution"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>
                
                <InputWrapper
                    label="Intelligence"
                    field="intelligence"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>
                
                <InputWrapper
                    label="Wisdom"
                    field="wisdom"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>
                
                <InputWrapper
                    label="Charisma"
                    field="charisma"
                    className="jdgd-input"
                >
                    <TextField 
                        variant="outlined" 
                        type="number"
                        InputProps={{ inputProps: { min: 1, max: 20 } }}
                    />
                </InputWrapper>
            </FormLayout>
        </ColumnLayout>
    );
};
export default Character;