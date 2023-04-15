import { useCallback, useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import BlockLayout from '../../components/Layouts/BlockLayout';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import ReactTooltip from 'react-tooltip';
import { iEquipment, iSpell } from './DndInterfaces';
import Body from '../../components/Text/Body';
import stringUtils from '../../utils/stringUtils';
import RowLayout from '../../components/Layouts/RowLayout';
import SubHeadline from '../../components/Text/SubHeadline';
import Pill from '../../components/Pill/Pill';

const Equipments = ({
    equipments,
    currencyTypes,
    equipmentCategories
}: any) => {
    const [search, setSearch] = useState('');
    const [selectedWeight, setSelectedWeight] = useState('');
    const [selectedCurrency, setSelectedCurrency] = useState('None');
    const [selectedCategory, setSelectedCategory] = useState('None');
    const [selectedCost, setSelectedCost] = useState('');

    const handleWeight = useCallback((e) => {
      setSelectedWeight(e?.target?.value);
    }, []);

    const handleCost = useCallback((e) => {
      setSelectedCost(e?.target?.value);
    }, []);

    const handleCurrency = useCallback((e) => {
      setSelectedCurrency(e?.target?.value);
    }, []);

    const handleCategory = useCallback((e) => {
      setSelectedCategory(e?.target?.value);
    }, []);
    
    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    return (
        <ColumnLayout style={{ padding: '12px 16px 60px' }}>
            <Headline size={1}>Equipment</Headline>
            <RowLayout>
                <TextField
                    onChange={handleWeight}
                    label="Weight"
                    value={selectedWeight}
                    variant="standard"
                />
                <TextField
                    onChange={handleCost}
                    label="Cost"
                    value={selectedCost}
                    variant="standard"
                />
                <FormControl style={{ minWidth: 80 }}>
                    <InputLabel id="currency-select-label">Currency</InputLabel>
                    <Select
                        labelId='currency-select-label'
                        id="currency-select"
                        value={selectedCurrency}
                        onChange={handleCurrency}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {!currencyTypes ? <Loading /> : currencyTypes.map((price: string) => <MenuItem value={price}>{price}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl style={{ minWidth: 80 }}>
                    <InputLabel id="category-select-label">Category</InputLabel>
                    <Select
                        labelId='category-select-label'
                        id="category-select"
                        value={selectedCategory}
                        onChange={handleCategory}
                    >
                        <MenuItem value={'None'}>None</MenuItem>
                        {!equipmentCategories ? <Loading /> : equipmentCategories.map((cat: string) => <MenuItem value={cat}>{cat}</MenuItem>)}
                    </Select>
                </FormControl>
            </RowLayout>
            <TextField
                onChange={onChange}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {!equipments ? <Loading /> : equipments
                  .filter((e: iEquipment) => stringUtils.filterBySearch(e.cost.quantity, selectedCost))
                  .filter((e: iEquipment) => stringUtils.filterBySearch(e.cost.unit, selectedCurrency === 'None' ? '' : selectedCurrency))
                  .filter((e: iEquipment) => stringUtils.filterBySearch(e.equipment_category.name, selectedCategory === 'None' ? '' : selectedCategory))
                  .filter((e: iEquipment) => stringUtils.filterBySearch(e.weight, selectedWeight))
                  .filter((e: iEquipment) => stringUtils.filterBySearch(e.name, search))
                  .map((equipment: iEquipment) => {
                      return (
                          <Equipment 
                            key={equipment.index} 
                            equipment={equipment} 
                            search={search} 
                            selectedCost={selectedCost}
                            selectedCurrency={selectedCurrency}
                            selectedCategory={selectedCategory}
                            selectedWeight={selectedWeight}
                          />
                      );
                })}
            </BlockLayout>
        </ColumnLayout>
    );
};

export default Equipments;

const Equipment = ({ 
  equipment, 
  search,
  selectedCost,
  selectedCurrency,
  selectedCategory,
  selectedWeight
}: any) => {
  const costSelected = selectedCost === equipment.cost.quantity?.toString();
  const currencySelected = selectedCurrency?.toLowerCase() === equipment.cost.unit;
  const weightSelected = selectedWeight === equipment.weight?.toString();
  const catSelected = selectedCategory === equipment.equipment_category.name;
  const label = search ? stringUtils.highlight(equipment.name, search) : equipment.name;
  return (
    <ColumnLayout isCard>
      <Headline secondary size={3}>{label}</Headline>
      <RowLayout>
          <Pill className={`${weightSelected ? 'pill-8' : 'None'} slender`}>{equipment.weight} lb</Pill>
          <Pill className={`${currencySelected || costSelected ? `pill-9` : 'None'} slender`}>{equipment.cost.quantity} {equipment.cost.unit}</Pill>
          <Pill className={`${catSelected ? 'pill-8' : 'None'} slender`}>{equipment.equipment_category.name}</Pill>
      </RowLayout>
      {equipment.desc && <Body>{stringUtils.truncate(equipment.desc.join(' '), 126)}</Body>}
      {equipment.gear_category && (
        <Body>Gear category: {equipment.gear_category.name}</Body>
      )}
    </ColumnLayout>
  );
};
