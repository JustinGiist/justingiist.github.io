import { TextField } from '@mui/material';
import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import HeroCard, { iHero } from '../../components/HeroCard/HeroCard';
import ImageComponent from '../../components/HeroCard/ImageComponent';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import RowLayout from '../../components/Layouts/RowLayout';
import Loading from '../../components/Loading/Loading';
import MediaTile from '../../components/MediaTile/MediaTile';
import ModalContext from '../../components/Modal/ModalContext';
import TabsComponent from '../../components/TabsComponent/TabsComponent';
import Headline from '../../components/Text/Headline';
import SubHeadline from '../../components/Text/SubHeadline';
import './HeroPage.scss';

const HeroPage = () => {
    const { openModal, closeModal } = useContext(ModalContext);
    const [search, setSearch] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [activeHero, innerSetActiveHero] = useState<iHero | undefined>(
      undefined
    );
    const [data, setData] = useState<any>();
    const scrollRef = useRef<any>(undefined);

    const openHeroModal = useCallback(async (hero?: iHero) => {
        if (!hero) return;
        openModal(<HeroCard closeFunction={closeModal} hero={hero} />);
    }, [
        openModal,
        activeHero,
        closeModal
    ]);
    const getData = useCallback(async () => {
        try {
            await setLoading(true);
            const response = await fetch("https://tppublic.blob.core.windows.net/test-data/super-heroes.json")
            const data = await response?.json();
            if (data) {
                setData(data);
            }

        } catch (e: any) {
            console.log(e?.message);
        }
        setLoading(false);
    }, []);
    const onChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    useEffect(() => {
      getData();
    }, [getData]);

    const setActiveHero = useCallback(async (hero?: iHero) => {
      if (!hero) {
        innerSetActiveHero(undefined);
      } else {
        innerSetActiveHero(hero);
        openHeroModal(hero);
      }
    }, [
        openHeroModal
    ]);
    const imageLibraryCards = useMemo(() => loading ? <Loading /> : data.filter((hero: any) => {
        if (search === "") return true;
        if (!hero) return false;
        const regex = new RegExp(`${search}`, 'gmi');
        const match = regex.test(hero.name);
        return match;
    }).map((hero : iHero) => {
        const middleSection = (
            <ImageComponent hero={hero} onClick={() => setActiveHero(hero)}/>
        );
        const bottomSection = (
            <Headline size={3}>{hero.name ?? "No Hero Name"}</Headline>
        );
        return (
            <MediaTile
                key={hero.id}
                middleSection={middleSection}
                bottomSection={bottomSection}
            />
        );
    }), [
        search,
        data,
        loading,
        setActiveHero
    ]);
    return (
        <ColumnLayout id="HeroPage">
            <Headline size={1}>
                Hall of Heroes
            </Headline>
            <TextField
                onChange={onChange}
                label="Search"
                value={search}
                variant="filled"
                className="jdgd-input"
            />
            <RowLayout ref={scrollRef} className="image-library">
                {imageLibraryCards}
            </RowLayout>
        </ColumnLayout>
    );
};
export default HeroPage;