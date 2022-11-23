import { ThemeContext } from '@emotion/react';
import React, { useState, useCallback, useMemo, useContext } from 'react';
import { ThemeManagerContext } from '../../App';
import CloseComponent from '../CloseComponent/CloseComponent';
import Icon from '../Icon/Icon';
import ErrorBoundary from '../PageLayout/ErrorBoundary';
import './Modal.scss';

interface iModalOptions {

}

interface iModal {
    children: any;
    handleClose: (result: any) => void;
    childProps?: any;
    props?: any;
    modalOptions?: iModalOptions;
}

interface iModalRoot {
    isOpen: boolean;
    activeModal: iModal;
}

const modalFallbackComponent = (closeModal: () => void) => (
    <div className="flexColumn">
        <h3>Sorry this modal is not working right now. An error report was already sent to engineering.</h3>
        <button onClick={closeModal}>Close</button>
    </div>
)

function ModalRoot({ isOpen, activeModal }: iModalRoot) {
    const {
        children,
        handleClose,
        childProps,
        props,
        modalOptions
    } = activeModal;
    const { theme } = useContext(ThemeManagerContext);
    const handleModalClose = useCallback(async (result) => {
        handleClose(result);
    }, [handleClose]);
    const genericClasses = `modal-container ${theme}`;
    const memoizedClasses = !props ? genericClasses : `${genericClasses} ${props.className}`;
    const memoizedContentClasses = !props ? 'modal-content' : `modal-content ${props.contentClassName || ''}`;
    const memoizedStyle = !props ? {} : props.style;
    const childrenWithProps = React.Children.map(children, child => {
        // Checking isValidElement is the safe way and avoids a
        // typescript error too.
        if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...childProps, onClose: handleModalClose });
        }
        return child;
    });
    if (!children) return null;
    return !isOpen ? null : (
        <div className={memoizedClasses} style={memoizedStyle}>
            <ErrorBoundary fallbackComponent={modalFallbackComponent}>
                <div id="modal-content" className={memoizedContentClasses}>
                    {<CloseComponent action={() => handleModalClose(null)} />}
                    {childrenWithProps}
                </div>
            </ErrorBoundary>
        </div>
    );
}
interface iUseModal {
    ModalRoot: React.ElementType,
    openModal: (children: any, childProps: any, modalOptions: any) => Promise<any>,
    closeModal: (result: any) => void
}
const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeModal, setActiveModal] = useState<iModal | undefined>(undefined);

    const modalRoot = useMemo(() => !activeModal ? null : (
        <ModalRoot
            isOpen={isOpen}
            activeModal={activeModal}
        />
    ), [isOpen, activeModal]);

    const openModal = useCallback((
        children, 
        childProps, 
        modalOptions
    ) => new Promise((resolve) => {
        if (!modalRoot) {
            // enqueueSnackbar('There is no modal root configured for this modal. Please add it to your react render');
        }

        const modal = {
            children,
            childProps: childProps,
            modalOptions,
            handleClose: async (result: any) => {
                setIsOpen(false);
                setTimeout(() => {
                    setActiveModal(undefined);
                    resolve(result);
                }, 100);
            }
        };

        setActiveModal(modal);
        setTimeout(() => setIsOpen(true), 100);
    }), [modalRoot]);

    const closeModal = useCallback(() => {
        if (!activeModal) return;
        activeModal.handleClose(null);
    }, [activeModal]);

    return {
        modalRoot,
        openModal,
        closeModal
    };
};

export default useModal;
