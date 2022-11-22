import './FragmentsPage.scss';
import { useState, useCallback, useMemo } from 'react';
import { AcolyteClassPage, AlchemistClassPage, BrawlerClassPage, Class, ComboLevel, CorsairClassPage, HunterClassPage, iClassPage, RunesmithClassPage, SubClassCombos, TearDivinerClassPage } from './FragmentsEnumsAndI';
import TabsComponent from '../../../components/TabsComponent/TabsComponent';
interface FragmentsPageProps {

}

const FragmentsPage = (props: FragmentsPageProps) => {
    const [tab, setTab] = useState(Class[Class.Corsair]);
    const tabs = useMemo(() => Object.keys(Class).filter((v) => isNaN(Number(v))).map((key, index) => Class[index]), []);
    return (
        <div className='fragmentsContent'>
            <h1 className='text-headline'>Fragments</h1>
            <h2 className='text-sub-headline'>Tears of the Stone Obelisks</h2>
            <div className='tabs'>
                {<TabsComponent 
                    tabs={tabs}
                    selectedTab={tab}
                    setSelectedTab={setTab}
                />}
            </div>
            <div className='content'>
                {tab === Class[Class.Corsair] && <ClassPage classPage={CorsairClassPage} />}
                {tab === Class[Class.Brawler] && <ClassPage classPage={BrawlerClassPage} />}
                {tab === Class[Class.Hunter] && <ClassPage classPage={HunterClassPage} />}
                {tab === Class[Class.Alchemist] && <ClassPage classPage={AlchemistClassPage} />}
                {tab === Class[Class.Runesmith] && <ClassPage classPage={RunesmithClassPage} />}
                {tab === Class[Class.TearDiviner] && <ClassPage classPage={TearDivinerClassPage} />}
                {tab === Class[Class.Acolyte] && <ClassPage classPage={AcolyteClassPage} />}
            </div>
        </div>
    );
}
export default FragmentsPage;
const getNumber = (level: string) => {
    switch(level) {
        case 'One':
            return '1';
        case 'Eight':
            return '8';
        case 'Fourteen':
            return '14';
        case 'Twenty':
            return '20';
    }
}
const SubClassCombosObj = SubClassCombos();
const ClassPage = ({ classPage }:{ classPage: iClassPage }) => {
    const [selectedMenu, setSelectedMenu] = useState('combos');
    const combosElement = () => {
        const comboArray = Object.keys(classPage.subClasses).map(combo => {
            const levelsArray = Object.keys(ComboLevel).filter((v) => isNaN(Number(v)));
            const levelsElement = levelsArray.map((level: string) => {
                const subClassComboArray = SubClassCombosObj.searchForSubClassArray(classPage.subClasses[combo]);
                return (
                    <div key={`levels-element-${level}`} className={'subClassTab ' + level}>
                        <div className='subClassTabLevel subText'>{'Level ' + getNumber(level)}</div>
                        {subClassComboArray.map(combo => ComboLevel[combo.level] === level ? <div key={`sub-class-item-${combo.name}`} className='subHeadlineBold'>{combo.name}</div> : null)}
                    </div>
                );  
            });
            return <div className='flexColumn'>
                <h3 className='text-headline'>{classPage.subClasses[combo]}</h3>
                {levelsElement}
            </div>;
        });
        return (
            <div className='subClassMenu'>
                {comboArray}
            </div>
        )
    }
    const levelsElement = () => {
        const gridHeader = <div className='levelHeader'><h5>Level Gained at this Level</h5></div>;
        const gridRows = classPage.levels.map((levelDescription: string, index: number) => {
            return <div key={`grid-row-${levelDescription}`} className='row'><div className='subHeadlineBold'>{index + 1}</div><div className='subHeadlineMedium'>{levelDescription}</div></div>
        })
        return (
            <div className='levelTable'>
                {gridHeader}
                {gridRows}
            </div>
        )
    };
    const img = useCallback(() => {
        if (classPage.img === 'noImage') {
            return <div className='image noImage' />
        }
        return <div className='image'>{classPage.img}</div>
    }, [
        classPage.img
    ]);
    return (
        <div className='classPage'>
            <div className='flexFull'>
                <div className='flexColumn'>
                    <h2>{classPage.title}</h2>
                    <h4>{classPage.subTitle}</h4>
                    <div className='text-sub-body' style={{ marginTop: 16 }}>{classPage.description}</div>
                </div>
                <div className='flexColumn' style={{ alignItems: 'flex-end' }}>
                    {img()}
                </div>
            </div>
            <div className='flexColumn'>
                <div className='flex selectionMenu'>
                    <h3 className={selectedMenu === 'combos' ? 'selected' : ''} onClick={() => setSelectedMenu('combos')}>Combos</h3>
                    <h3 className={selectedMenu === 'levels' ? 'selected' : ''} onClick={() => setSelectedMenu('levels')}>Levels</h3>
                </div>
            </div>
            {selectedMenu === 'combos' && (
                combosElement()
            )}
            {selectedMenu === 'levels' && (
                levelsElement()
            )}
        </div>  
    ); 
};