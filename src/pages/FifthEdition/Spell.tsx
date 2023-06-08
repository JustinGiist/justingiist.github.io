import React, { useState } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import Body from '../../components/Text/Body';
import Loading from '../../components/Loading/Loading';
import RowLayout from '../../components/Layouts/RowLayout';
import { Button } from '@material-ui/core';
import BlockLayout from '../../components/Layouts/BlockLayout';
import stringUtils from '../../utils/stringUtils';
import Pill from '../../components/Pill/Pill';
import { getSchoolColor } from './MagicSchools';
import { ValueLabel } from './DnDMain';
import { SpellProps } from './DndInterfaces';
import SubHeadline from '../../components/Text/SubHeadline';

const Spell: React.FC<SpellProps> = ({ spellInfo, search, selectedSchool, selectedLevel, selectedDuration, ...rest }) => {
    const [showMore, setShowMore] = useState(false);

    if (!spellInfo) {
        return <Loading />;
    }
    const buttonLabel = showMore ? 'Show Less' : 'Show More';
    const label = search ? stringUtils.highlight(spellInfo.name, search) : spellInfo.name;

    const schoolSelected = selectedSchool === spellInfo?.school.index;
    const levelSelected = selectedLevel === spellInfo.level;
    const durationSelected = selectedDuration === spellInfo.duration;

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
            <RowLayout>
                <Pill className={`${schoolSelected ? `pill-${getSchoolColor(spellInfo.school.name)}` : 'None'} slender`}>{spellInfo.school.name}</Pill>
                <Pill className={`${levelSelected ? 'pill-8' : 'None'} slender`}>Level: {spellInfo.level}</Pill>
                <Pill className={`${durationSelected ? 'pill-9' : 'None'} slender`}>{spellInfo.duration}</Pill>
            </RowLayout>
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
                        <ValueLabel label="At Higher Levels: " value={spellInfo.higher_level.map(level => <Body key={level}>{level}</Body>)} />
                    )}
                </>
            )}
        </ColumnLayout>
    );
};

export default Spell;