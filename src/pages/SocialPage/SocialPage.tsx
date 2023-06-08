import { useEffect, useMemo, useState } from 'react';
import ColumnLayout from '../../components/Layouts/ColumnLayout';
import Headline from '../../components/Text/Headline';
import TileLayout from '../../components/Layouts/TileLayout';
import { Button } from '@material-ui/core';
import Body from '../../components/Text/Body';
import './SocialPage.scss';
import RowLayout from '../../components/Layouts/RowLayout';
import Tile from '../../components/Layouts/Tile';
import Icon from '../../components/Icon/Icon';
import { iPost, posts } from './SocialData';
import stringUtilsExport from '../../utils/stringUtils';
import SubHeadline from '../../components/Text/SubHeadline';

const SocialPage = () => {
    
    return (
        <>
            <RowLayout layoutClass='flexSB' className='top-bar'>
                <Headline secondary size={4}>Social</Headline>
                <RowLayout noWrapping>
                    <Button data-tip="Account" className="button icon primary"><Icon icon="Account" /></Button>
                    <Button data-tip="Settings" className="button icon primary"><Icon icon="Settings" /></Button>
                </RowLayout>
            </RowLayout>
            <ColumnLayout
                id="social-page"
                addSectionPadding
            >
                <Headline size={2}>Your Feed</Headline>
                <TileLayout className='social'>
                    {posts?.map((post) => <Post post={post} />)}
                </TileLayout>
            </ColumnLayout>
        </>
    );
};
export default SocialPage;

const totalAllowedWordsPerPage = 200;

const Post = ({
    post
}: {
    post: iPost
}) => {
    const [selectedPage, setSelectedPage] = useState(0);
    const [visitedLastPage, setVisitedLastPage] = useState(false);
    const words = post?.body?.split(' ');
    const numOfPages = Math.ceil(words.length / totalAllowedWordsPerPage);
    const onFirstPage = selectedPage === 0;
    const onLastPage = selectedPage === numOfPages - 1;

    useEffect(() => {
        if (onLastPage) {
            setVisitedLastPage(true);
        }
    }, [onLastPage]);

    const pages = useMemo(() => {
        const result = [];
        let tempListOfWords = stringUtilsExport.splitByWords(post?.body); 
        for (let i = 0; i < numOfPages; i++) {
            const page = tempListOfWords.splice(0, totalAllowedWordsPerPage);
            result.push(page);
        }
        return result;
    }, [
        numOfPages,
        post?.body
    ]);

    const page = useMemo(() => {
        return pages[selectedPage].map((word, i) => {
            if (word === '\n') return [<br />, <br />];
            else {
                let result = `${word}`;
                if (i !== pages[selectedPage].length - 1) {
                    result += ' ';
                }
                return result;
            }
        });
    }, [
        pages,
        selectedPage
    ]);
    
    const topSection = (
        <RowLayout layoutClass='flexSB' noWrapping>
            <ColumnLayout gap={4}>
                <Headline size={3}>{post.label}</Headline>
            </ColumnLayout>
            <div />
        </RowLayout>
    );

    const middleSection = (
        <Body className='bodyBold'>
            {page}
            {!onLastPage && <span className='text-placeholder'>... (next page)</span>}
        </Body>
    );

    const prevOnClick = !onFirstPage ? () => setSelectedPage(prev => prev - 1) : () => {};
    const nextOnClick = !onLastPage ? () => setSelectedPage(prev => prev + 1) : () => {};
    const bottomSection = (
        <RowLayout layoutClass='flexSB'>
            <RowLayout noWrapping style={{ alignItems: 'center' }}>
                <Button className='button secondary icon circle' data-tip="Go to account">
                    <Icon icon='Account'/>
                </Button>
                <SubHeadline>{post.userId}</SubHeadline>
            </RowLayout>
            <RowLayout noWrapping gap={16}>
                <Headline secondary size={4}>Page {selectedPage + 1} / {numOfPages}</Headline>
                <Button
                    onClick={prevOnClick}
                    disabled={onFirstPage}
                    className='button secondary'
                >Prev</Button>
                <Button
                    onClick={nextOnClick}
                    disabled={onLastPage}
                    className='button primary'
                >Next</Button>
            </RowLayout>
        </RowLayout>
    );

    const menu = (
        <ColumnLayout gap={16} className={`social-tile-container-menu`}>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Edit'/>
            </Button>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Star'/>
            </Button>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Happy'/>
            </Button>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Sad'/>
            </Button>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Scared'/>
            </Button>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Funny'/>
            </Button>
            <Button className='button icon circle' data-tip="Go to account">
                <Icon icon='Delete'/>
            </Button>
        </ColumnLayout>
    ); 

    return (
        <div className={`social-tile-container ${visitedLastPage ? 'show' : ''}`}>
            {menu}
            <Tile 
                key={post.id} 
                className="large"
                topSection={topSection}
                middleSection={middleSection}
                bottomSection={bottomSection}
            />
        </div>
    )
};