import React, { useState, useEffect } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import BlockLayout from '../../components/Layouts/BlockLayout';
import Body from '../../components/Text/Body';
import { TextField } from '@material-ui/core';
import stringUtils from '../../utils/stringUtils';
import Loading from '../../components/Loading/Loading';
import RowLayout from '../../components/Layouts/RowLayout';
import ImageVideo from '../../components/ImageVideo';
import { DndAPIResult, Monster, getDndUrl } from './DndInterfaces';
import { ValueLabel } from './DnDMain';

const MonstersList: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [search, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMonster = async (monsterName: string) => {
      try {
        const response = await fetch(getDndUrl(`/api/monsters/${monsterName}`));
        if (response?.status === 404) throw new Error();
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    };
    const fetchMonsters = async () => {
        setLoading(true);
        try {
            const url = getDndUrl(`/api/monsters`);
            const response = await fetch(url);
            const data = await response.json();
            const getAllMonsterData = async () => {
                const promises: any[] = [];
                data.results.forEach((monsterResponse: DndAPIResult) => {
                    promises.push(fetchMonster(monsterResponse.index));
                });
                return Promise.all(promises);
            };
            const monsterResults = await getAllMonsterData();
            setMonsters(monsterResults);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };
    fetchMonsters();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const imageStyle = ({ border: '2px solid #333', borderRadius: 8, overflow: 'hidden' });

  if (loading) return <Loading />;
  return (
        <ColumnLayout style={{ padding: '12px 12px 60px' }}>
            <Headline size={1}>Monsters List</Headline>
            <TextField
                onChange={handleSearch}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <BlockLayout>
                {monsters.filter(m => stringUtils.filterBySearch(m.name, search)).map((monster) => {
                    const label = search ? stringUtils.highlight(monster.name, search) : monster.name;
                    const url = !monster.image ? undefined : getDndUrl(monster.image);
                    return (
                        <RowLayout isCard key={monster.name}>
                            <ColumnLayout>
                                <Headline secondary size={3}>{label}</Headline>
                                <ValueLabel label="Size: " value={monster.size} />
                                <ValueLabel label="Type: " value={monster.type} />
                                <ValueLabel label="Alignment: " value={monster.alignment} />
                            </ColumnLayout>
                            {url && (
                                <ImageVideo src={url} alt={monster.name} maxHeight="280px" height="280px" maxWidth="180px" style={imageStyle}/>
                            )}
                        </RowLayout>
                    );
                })}
            </BlockLayout>
            </ColumnLayout>
  );
};

export default MonstersList;
