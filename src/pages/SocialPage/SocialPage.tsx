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
import { useWindowDimensions } from '../../ThemeManager';
import PagingOverlay from './PagingOverlay';

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
                    {posts?.map((post) => <Post key={`${post.id}-post-id`} post={post} />)}
                </TileLayout>
            </ColumnLayout>
        </>
    );
};
export default SocialPage;

const Post = ({
    post
}: {
    post: iPost
}) => {
    const dimensions = useWindowDimensions();
    const totalAllowedWordsPerPage = dimensions?.isMobile ? 100 : 200;

    const [selectedPage, setSelectedPage] = useState(0);
    const [visitedLastPage, setVisitedLastPage] = useState(false);
    const words = post?.body?.split(' ');
    const numOfPages = Math.ceil(words.length / totalAllowedWordsPerPage);
    const onFirstPage = selectedPage === 0;
    const onLastPage = selectedPage === numOfPages - 1;

    const totalParagraphsPerPage = dimensions?.isMobile ? 2 : 3;

    useEffect(() => {
        if (onLastPage) {
            setVisitedLastPage(true);
        }
    }, [onLastPage]);

    const pages = useMemo(() => stringUtilsExport.splitByWordsToElements(post?.body, totalParagraphsPerPage), [
        post?.body,
        totalParagraphsPerPage
    ]);

    const page = useMemo(() => pages[selectedPage], [
        pages,
        selectedPage
    ]);
    const topSection = (
        <RowLayout layoutClass='flexSB' noWrapping>
            <ColumnLayout gap={4}>
                <Headline size={3}>{post.label}</Headline>
                <Body className='text-sub-body'>Page {selectedPage + 1} / {numOfPages}</Body>
            </ColumnLayout>
            <RowLayout noWrapping style={{ alignItems: 'center' }}>
                <Button className='button secondary icon circle' data-tip="Go to account">
                    <Icon icon='Account'/>
                </Button>
                {!dimensions.isMobile && <SubHeadline>{post.userId}</SubHeadline>}
            </RowLayout>
        </RowLayout>
    );

    const middleSection = (
        <PagingOverlay 
            onLastPage={onLastPage}
            onFirstPage={onFirstPage}
            setSelectedPage={setSelectedPage}
        >
            <ColumnLayout>
                {page}
                {!onLastPage && <span className='text-placeholder'>... (next page)</span>}
            </ColumnLayout>
        </PagingOverlay>
    );

    const menu = (
        <ColumnLayout gap={16} className={`social-tile-container-menu`}>
            <Button className='button icon circle' data-tip="Edit">
                <Icon icon='Edit'/>
            </Button>
            <Button className='button icon circle' data-tip="Favorite">
                <Icon icon='Star'/>
            </Button>
            <Button className='button icon circle' data-tip="Reaction: Happy">
                <Icon icon='Happy'/>
            </Button>
            <Button className='button icon circle' data-tip="Reaction: Sad">
                <Icon icon='Sad'/>
            </Button>
            <Button className='button icon circle' data-tip="Reaction: Scared">
                <Icon icon='Scared'/>
            </Button>
            <Button className='button icon circle' data-tip="Reaction: Funny">
                <Icon icon='Funny'/>
            </Button>
            <Button className='button icon circle' data-tip="Delete">
                <Icon icon='Delete'/>
            </Button>
        </ColumnLayout>
    ); 

    return (
        <div className={`social-tile-container ${visitedLastPage ? 'show' : ''}`}>
            <Tile 
                key={post.id} 
                className="large"
                topSection={topSection}
                middleSection={middleSection}
            />
            {menu}
        </div>
    )
};