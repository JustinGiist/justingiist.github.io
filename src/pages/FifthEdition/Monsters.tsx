import React, { useState, useEffect, useCallback } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import BlockLayout from '../../components/Layouts/BlockLayout';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import stringUtils from '../../utils/stringUtils';
import Loading from '../../components/Loading/Loading';
import RowLayout from '../../components/Layouts/RowLayout';
import ImageVideo from '../../components/ImageVideo';
import { Monster, getDndUrl } from './DndInterfaces';
import { ValueLabel } from './DnDMain';
import SubHeadline from '../../components/Text/SubHeadline';
import Pill from '../../components/Pill/Pill';

const sizeArray = ['Gargantuan', 'Huge', 'Large', 'Medium', 'Small', 'Tiny'];

const MonstersList = ({ monsters, monsterTypes }: { monsters?: Monster[], monsterTypes?: string[] }) => {
  const [search, setSearchTerm] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('None');
  const [selectedType, setSelectedType] = useState<string>('None');

  const handleSize = useCallback((e: any) => {
    setSelectedSize(e?.target?.value);
  }, []);

  const handleType = useCallback((e: any) => {
    setSelectedType(e?.target?.value);
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const imageStyle = ({ border: '2px solid #333', borderRadius: 8, overflow: 'hidden' });

  return (
        <ColumnLayout style={{ padding: '12px 12px 60px' }}>
            <Headline size={1}>Monsters List</Headline>
            <RowLayout>
                <FormControl style={{ minWidth: 126 }}>
                    <InputLabel id="size-select-label">Size</InputLabel>
                    <Select
                        labelId='size-select-label'
                        id="size-select"
                        value={selectedSize}
                        onChange={handleSize}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {sizeArray.map((size: string) => <MenuItem value={size}>{size}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl style={{ minWidth: 126 }}>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                        labelId='type-select-label'
                        id="type-select"
                        value={selectedType}
                        onChange={handleType}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {!monsterTypes ? <Loading /> : monsterTypes.map((type: string) => <MenuItem value={type}>{type}</MenuItem>)}
                    </Select>
                </FormControl>
            </RowLayout>
            <TextField
                onChange={handleSearch}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {!monsters ? <Loading /> : monsters
                    .filter((m: Monster) => stringUtils.filterBySearch(m.type, selectedType === 'None' ? '' : selectedType))
                    .filter((m: Monster) => stringUtils.filterBySearch(m.size, selectedSize === 'None' ? '' : selectedSize))
                    .filter((m: Monster) => stringUtils.filterBySearch(m.name, search)).map((monster: Monster) => {
                        const label = search ? stringUtils.highlight(monster.name, search) : monster.name;
                        const url = !monster.image ? undefined : getDndUrl(monster.image);
                        const sizeSelected = selectedSize === monster.size;
                        const typeSelected = selectedType === monster.type;
                        return (
                            <RowLayout className='flexSB noWrap' isCard key={monster.name}>
                                <ColumnLayout>
                                    <Headline secondary size={3}>{label}</Headline>
                                    <RowLayout>
                                        <Pill className="None slender">CR: {monster.challenge_rating}</Pill>
                                        <Pill className={`${sizeSelected ? 'pill-9' : 'None'} slender`}>{monster.size}</Pill>
                                        <Pill className={`${typeSelected ? 'pill-8' : 'None'} slender`}>{monster.type}</Pill>
                                    </RowLayout>
                                    <ValueLabel label="Alignment" value={monster.alignment}/>
                                </ColumnLayout>
                            </RowLayout>
                        );
                    })}
            </BlockLayout>
            </ColumnLayout>
  );
};

export default MonstersList;
