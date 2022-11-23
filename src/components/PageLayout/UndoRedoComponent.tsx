import {
    useCallback
} from 'react';
import Icon from '../Icon/Icon';
import { ChangeType } from './PageLayout';

interface UndoRedoComponentProps {
    formData: any;
    undoState: any;
    redoState: any;
    hasChanges: boolean;
    handleChangeReducer: (
        type: ChangeType,
        field: string | null,
        newValue: any
    ) => void;
}

const UndoRedoComponent = ({
    formData,
    undoState,
    redoState,
    hasChanges,
    handleChangeReducer
} : UndoRedoComponentProps) => {
    const handleUndo = useCallback(() => {
        handleChangeReducer(ChangeType.undo, null, null);
    }, [
        handleChangeReducer
    ]);

    const handleRedo = useCallback(() => {
        handleChangeReducer(ChangeType.redo, null, null);
    }, [
        handleChangeReducer
    ]);

    const undoClasses = `tprc-icon-button ${hasChanges ? 'green' : 'disabled'}`;
    const redoClasses = `tprc-icon-button ${redoState ? 'green' : 'disabled'}`;

    return (
        <div
            className="undo-redo-component-container flex noWrap"
        >
            {!redoState && (
                <button
                    type="button"
                    className={undoClasses}
                    onClick={handleUndo}
                    data-tip={'Undo'}
                >
                    <Icon icon="Undo" />
                </button>
            )}
            {redoState && (
                <button
                    type="button"
                    className={redoClasses}
                    onClick={handleRedo}
                    data-tip={'Redo'}
                >
                    <Icon icon="Redo" />
                </button>
            )}
        </div>
    );
};
export default UndoRedoComponent;
