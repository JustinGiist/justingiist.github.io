import React, { useEffect, useState } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import Body from '../../components/Text/Body';
import { Loading } from 'mdi-material-ui';
import RowLayout from '../../components/Layouts/RowLayout';
import { Button, ButtonBase } from '@material-ui/core';
import BlockLayout from '../../components/Layouts/BlockLayout';
import SubHeadline from '../../components/Text/SubHeadline';

type SpellProps = {
    spellName: string;
};

export interface iSpell {
    index: string;
    name: string;
    desc: string[];
    higher_level: string[];
    range: string;
    components: string[];
    material: string;
    ritual: boolean;
    duration: string;
    concentration: boolean;
    casting_time: string;
    level: number;
    school: {
        name: string;
        url: string;
    };
};

const Spell: React.FC<SpellProps> = ({ spellName }) => {
    const [spellInfo, setSpellInfo] = useState<iSpell>();
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
      const fetchSpell = async () => {
        try {
          const response = await fetch(`https://www.dnd5eapi.co/api/spells/${spellName}`);
          if (response?.status === 404) throw new Error();
          const data = await response.json();
          setSpellInfo(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchSpell();
    }, [spellName]);

    if (!spellInfo) {
        return <Loading />;
    }
    const buttonLabel = showMore ? 'Show Less' : 'Show More';
    return (
        <ColumnLayout isCard>
            <RowLayout className="flexSB">
                <Headline secondary size={3}>{spellInfo.name}</Headline>
                <Button
                    aria-label={buttonLabel}
                    onClick={() => setShowMore(!showMore)}
                >
                    {buttonLabel}
                </Button>
            </RowLayout>
            {spellInfo.school && <SubHeadline>{spellInfo.school.name}</SubHeadline>}
            {spellInfo.desc && <Body>{spellInfo.desc[0]}</Body>}
            {!showMore ? null : (
                <>
                    <BlockLayout gap={16}>
                        <SpellLabel label="Casting Time: " value={spellInfo.casting_time} />
                        <SpellLabel label="Range: " value={spellInfo.range} />
                        <SpellLabel label="Components: " value={spellInfo.components} />
                        <SpellLabel label="Material: " value={spellInfo.material} />
                        <SpellLabel label="Duration: " value={spellInfo.duration} />
                        <SpellLabel label="Concentration: " value={spellInfo.concentration} />
                        <SpellLabel label="Ritual: " value={spellInfo.ritual} />
                    </BlockLayout>
                    {spellInfo.higher_level && spellInfo.higher_level.length > 0 && (
                        <SpellLabel label="At Higher Levels: " value={spellInfo.higher_level.map(level => <Body>{level}</Body>)} />
                    )}
                </>
            )}
        </ColumnLayout>
    );
};

export default Spell;

const SpellLabel = ({ label, value }: any) => {
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