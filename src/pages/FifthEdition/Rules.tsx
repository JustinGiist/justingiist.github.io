import { useCallback, useMemo, useState } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import stringUtils from '../../utils/stringUtils';

const Rules = ({
    rules,
}: any) => {
    const [selectedTab, setSelectedTab] = useState(rules[0].index);
    const selectedRules = useMemo(() => rules.find((i: any) => i.index === selectedTab), [selectedTab, rules]);
    return (
        <ColumnLayout>
            <Headline>Rules</Headline>
            <FormControl className="jdgd-input" fullWidth>
                <InputLabel id="rule-select-label">Level</InputLabel>
                <Select
                    labelId='rule-select-label'
                    id="rule-select"
                    value={selectedTab}
                    label="Class"
                    onChange={(e: any) => setSelectedTab(e?.target?.value)}
                >
                    {rules.map((i: any) => <MenuItem key={`${i.index}-option`} value={i.index}>{i.name}</MenuItem>)}    
                </Select>
            </FormControl>
            <ColumnLayout>
                {selectedRules && <RuleSectionComponent ruleSection={selectedRules} />}
            </ColumnLayout>
        </ColumnLayout>
    )
}
export default Rules;
  
const RuleSectionComponent = ({ ruleSection }: any) => {
    const [search, setSearch] = useState('');
    
    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const SubSectionsElement = () => ruleSection.desc.split('\n')
        .filter((s: any) => search.trim().length < 3 ? true : stringUtils.filterBySearch(s, search))
        .map((s: any) => {
            if (!s) return null;
            const updatedString = search.trim().length < 3 ? s : stringUtils.markdownHighlight(s, search);
            return <ReactMarkdown key={s} children={updatedString} remarkPlugins={[remarkGfm]} />;
        });
        
    return (
        <ColumnLayout className='rule-section' isCard>
            <TextField
                onChange={onChange}
                label="Search within section (minLength: 3)"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <SubSectionsElement />
        </ColumnLayout>
    );
};