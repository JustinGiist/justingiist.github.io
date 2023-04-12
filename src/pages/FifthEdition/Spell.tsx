import React, { useEffect, useState } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import Body from '../../components/Text/Body';
import Loading from '../../components/Loading/Loading';
import RowLayout from '../../components/Layouts/RowLayout';
import { Button, ButtonBase } from '@material-ui/core';
import BlockLayout from '../../components/Layouts/BlockLayout';
import SubHeadline from '../../components/Text/SubHeadline';
import stringUtils from '../../utils/stringUtils';
import Pill from '../../components/Pill/Pill';
import { getSchoolColor } from './MagicSchools';
import { ValueLabel } from './DnDMain';

interface SpellProps extends React.ComponentPropsWithoutRef<"input"> {
    spellInfo?: iSpell;
    categories?: any[];
    search?: string;
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

const Spell: React.FC<SpellProps> = ({ spellInfo, search, categories, ...rest }) => {
    const [showMore, setShowMore] = useState(false);

    if (!spellInfo) {
        return <Loading />;
    }
    const buttonLabel = showMore ? 'Show Less' : 'Show More';
    const categorySelected = (categories && categories.length > 0) && categories.filter(cat => cat.name === spellInfo?.school.name).length > 0;
    const label = search ? stringUtils.highlight(spellInfo.name, search) : spellInfo.name;
    const schoolName = spellInfo.school.name
    return (
        <ColumnLayout isCard style={rest?.style} gap={4}>
            <RowLayout className="flexSB" noWrapping>
                <Headline secondary size={3}>{label}</Headline>
                <Button
                    aria-label={buttonLabel}
                    onClick={() => setShowMore(!showMore)}
                >
                    {buttonLabel}
                </Button>
            </RowLayout>
            {spellInfo.school && <Pill id={spellInfo.index} label={schoolName} enableIcons enableCheckMark isSelected={categorySelected} className={`slender disabled-pointer-events fill pill-${getSchoolColor(schoolName)}`} />}
            {spellInfo.desc && <Body truncateNumber={showMore ? undefined : 124}>{spellInfo.desc[0]}</Body>}
            {!showMore ? null : (
                <>
                    <BlockLayout noMobile gap={16}>
                        <ValueLabel label="Casting Time: " value={spellInfo.casting_time} />
                        <ValueLabel label="Range: " value={spellInfo.range} />
                        <ValueLabel label="Material: " value={spellInfo.material} />
                        <ValueLabel label="Components: " value={spellInfo.components} />
                        <ValueLabel label="Duration: " value={spellInfo.duration} />
                        <ValueLabel label="Concentration: " value={spellInfo.concentration} />
                        <ValueLabel label="Ritual: " value={spellInfo.ritual} />
                    </BlockLayout>
                    {spellInfo.higher_level && spellInfo.higher_level.length > 0 && (
                        <ValueLabel label="At Higher Levels: " value={spellInfo.higher_level.map(level => <Body>{level}</Body>)} />
                    )}
                </>
            )}
        </ColumnLayout>
    );
};

export default Spell;