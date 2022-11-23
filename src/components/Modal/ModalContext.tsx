import React from 'react';

interface iModalContext {
    openModal: any,
    closeModal: any
}
const ModalContext = React.createContext({} as iModalContext);
export default ModalContext;