import React  from 'react';
import { Button } from '@material-ui/core';
import './PagingOverlay.scss';
import Icon from '../../components/Icon/Icon';

const PagingOverlay = ({
    onFirstPage,
    onLastPage,
    setSelectedPage,
    children
}: any) => {
    const prevOnClick = !onFirstPage ? () => setSelectedPage((prev: any) => prev - 1) : () => {};
    const nextOnClick = !onLastPage ? () => setSelectedPage((prev: any) => prev + 1) : () => {};
    return (
        <div className='paging-overlay'>
            {!onFirstPage && (
                <Button
                    onClick={prevOnClick}
                    className='button left'
                >
                    <Icon icon="ArrowLeft"/>
                </Button>
            )}
            {!onLastPage && (
                <Button
                    onClick={nextOnClick}
                    className='button right'
                >
                    <Icon icon="ArrowRight"/>
                </Button>
            )}
            {children}
        </div>
    );
};
export default PagingOverlay;