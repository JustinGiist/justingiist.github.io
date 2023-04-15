import { useMemo, useState } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import TabsComponent from '../../components/TabsComponent/TabsComponent';
import MagicSchools from './MagicSchools';
import MonstersList from './Monsters';
import SubHeadline from '../../components/Text/SubHeadline';
import Body from '../../components/Text/Body';
import DndData from './DndData';
import Equipments from './Equipment';
import './DndMain.scss';

export const ValueLabel = ({ label, value }: any) => {
    if (!value && !(typeof value === "boolean")) return null;
    const valueElement = () => {
        if (typeof value === "boolean") {
            return !value ? "No" : "Yes";
        }
        return value;
    }
    return (
        <ColumnLayout gap={4}>
            <SubHeadline>{label}</SubHeadline>
            <Body>{valueElement()}</Body>
        </ColumnLayout>
    );
}

const DndMain = () => {
    const [tabs] = useState(Object.keys(DndPages));
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    const {
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
    } = DndData();

    const page = useMemo(() => {
        switch (selectedTab) {
            case 'magic-schools':
                return (
                    <MagicSchools 
                        magicSchools={magicSchools}
                        spells={spells}
                        spellMap={spellMap}
                    />
                );
            case 'classes':
            case 'equipment':
                return <Equipments equipments={equipments} currencyTypes={currencyTypes} equipmentCategories={equipmentCategories} />
            case 'monsters':
                return (
                    <MonstersList 
                        monsters={monsters} 
                        monsterTypes={monsterTypes}
                    />
                );
            case 'races':
            case 'rules':
            case 'character':
                return <div>{DndPages[selectedTab].label}</div>;
            default:
                return null;
        }
    }, [
        selectedTab,
        monsters,
        magicSchools,
        spells,
        spellMap,
        classes,
        equipments,
        races,
        rules,
        monsterTypes,
        currencyTypes,
        equipmentCategories
    ]);

    return (
        <ColumnLayout gap={16}>
            <TabsComponent
                tabs={tabs} 
                renderCallback={(item: string) => DndPages[item].label}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />
            {page}
        </ColumnLayout>
    );
};

export default DndMain;

const DndPages: any = ({
    "character" : {
        label: "Character",
        subPages: {
            "ability-scores":"Ability Scores",
            "alignments":"Alignments",
            "backgrounds":"Backgrounds",
            "skills":"Skills",
            "proficiencies":"Proficiencies",
            "feats":"Feats",
        }
    },
    "classes": {
        label: "Classes",
        subPages: {
            "subclasses":"Subclasses",
        }
    },
    "equipment": {
        label: "Equipment",
        subPages: {
            "weapon-properties":"Weapon properties",
            "magic-items":"Mage Items",
            "equipment-categories":"Equipment Categories",
        }
    },
    "magic-schools": {
        label: "Magic Schools",
        subPages: {
            "spells":"Spells",
        }
    },
    "monsters":{
        label: "Monsters",
    },
    "races": {
        label: "Races",
        subPages: {
            "subraces":"Subraces",
        }
    },
    "rules": {
        label: "Rules",
        subPages: {
            "rule-sections":"Rule Sections",
            "languages":"Languages",
            "conditions":"Conditions",
            "damage-types":"Damage Types",
            "traits":"Traits",
            "features":"Features",
        }
    },
});