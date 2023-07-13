import { Button, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import ColumnLayout from "../../components/Layouts/ColumnLayout";
import Loading from "../../components/Loading/Loading";
import { useCallback, useEffect, useState } from "react";
import Headline from "../../components/Text/Headline";
import SubHeadline from "../../components/Text/SubHeadline";
import RowLayout from "../../components/Layouts/RowLayout";
import Body from "../../components/Text/Body";
import BlockLayout from "../../components/Layouts/BlockLayout";
import { useWindowDimensions } from "../../ThemeManager";

const Classes = ({
    classes,
    equipments,
    actions,
    classesLoading,
    equipmentsLoading
}: any) => {
    const [selectedClass, setSelectedClass] = useState('barbarian');
    const handleClass = useCallback((e) => {
        setSelectedClass(e?.target?.value);
    }, []);

    useEffect(() => {
        if (!classes && !classesLoading) actions?.fetchClasses();
        if (!equipments && !equipmentsLoading) actions?.fetchEquipments();
    }, [classes, equipments, actions]);

    if (!classes || !equipments) return <Loading />;
    const classInfo = classes.find((i: any) => i.index === selectedClass);
    return (
        <ColumnLayout>
            <FormControl className="jdgd-input" fullWidth>
                <InputLabel id="class-select-label">Level</InputLabel>
                <Select
                    labelId='class-select-label'
                    id="class-select"
                    value={selectedClass}
                    label="Class"
                    onChange={handleClass}
                >
                    {classes.map((i: any) => <MenuItem key={`${i.index}-option`} value={i.index}>{i.name}</MenuItem>)}    
                </Select>
            </FormControl>
            {classInfo && (
                <>
                    <Headline size={2}>{classInfo.name}</Headline>
                    <SubHeadline>Hit Dice: 1d{classInfo.hit_die}</SubHeadline>
                    <BlockLayout>
                        <ClassReveal array={classInfo.proficiencies}>Proficiencies</ClassReveal>
                        <ClassReveal array={classInfo.saving_throws}>Saving Throws</ClassReveal>
                        <ClassReveal array={classInfo.starting_equipment}>Starting Equipment</ClassReveal>
                        <ClassReveal array={classInfo.subclasses}>SubClasses</ClassReveal>
                    </BlockLayout>
                </>
            )}
        </ColumnLayout>
    )
};
export default Classes;

const ClassReveal = ({
    array,
    children
}: any) => {
    const dimensions = useWindowDimensions();
    const [show, setShow] = useState(!dimensions.isMobile);
    return (
        <ColumnLayout isCard>
            <RowLayout className="flexSB">
                <Headline secondary size={3}>{children}</Headline>
                <Button onClick={() => setShow(!show)}>{!show ? 'Show' : 'Hide'}</Button>
            </RowLayout>
            {show && (
                <BlockLayout noMobile style={{ padding: 8 }}>
                    {Array.isArray(array) && array.map((i: any) => <Body key={i?.equipment?.name ?? i?.name}>{i?.equipment?.name ?? i?.name}</Body>)}
                </BlockLayout>
            )}
        </ColumnLayout>
    );
};