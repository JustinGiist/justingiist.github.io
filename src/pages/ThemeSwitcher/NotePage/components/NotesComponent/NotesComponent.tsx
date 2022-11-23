import { Button } from '@material-ui/core';
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { generateUUID } from 'three/src/math/MathUtils';
import CloseComponent from '../../../../../components/CloseComponent/CloseComponent';
import Icon from '../../../../../components/Icon/Icon';
import PageLayout, { iPageLayout } from '../../../../../components/PageLayout/PageLayout';
import { InputTypes } from '../../../../../components/PageLayout/SwitchInput';
import './NotesComponent.scss';

export enum NoteMode {
    deletion,
    none
}
export interface iNote {
    id: string;
    label?: string;
    note: string;
    icon?: string;
    theme?: string;
}

export interface iNotesComponent {
    notes: iNote[];
    setNotes: Dispatch<SetStateAction<iNote[]>>;
}

const noteLayout: iPageLayout = {
    id: 'note-form',
    inputs: [
        {
            id: 'note-label',
            label: 'Title',
            type: InputTypes.text,
            field: 'label'
        },
        {
            id: 'note-body',
            label: 'Note',
            type: InputTypes.textarea,
            field: 'note'
        }
    ]
}

export const NotesComponent = ({
    notes,
    setNotes
}: iNotesComponent) => {
    const [activeNote, setActiveNote] = useState<iNote | undefined>(undefined);
    const [mode, setMode] = useState<NoteMode>(NoteMode.none);
    const [selected, setSelected] = useState<iNote[]>([]);

    useEffect(() => {
        if (!activeNote) return;
        setNotes((prev) => {
            const result: iNote[] = prev.map((note) => {
                if (note.id === activeNote.id) {
                    note = { ...activeNote };
                }
                return note;
            });
            return result;
        })
    }, [
        activeNote,
        setNotes
    ])
    const addNote = useCallback(() => {
        setNotes((prev) => {
            const result = [...prev];
            result.push({
                id: generateUUID(),
                label: 'New Note',
                note: '',
                icon: 'Star'
            } as iNote);
            return result;
        });
    }, [
        setNotes
    ]);

    const addNoteToSelected = useCallback((deletedNote: iNote, newMode?: NoteMode) => {
        if (newMode !== undefined) setMode(newMode);
        setSelected(prev => {
            const alreadyExists = prev.filter(i => i.id === deletedNote.id).length > 0;
            if (alreadyExists) {
                return prev.filter(i => i.id !== deletedNote.id);
            } else {
                return [
                    ...prev,
                    deletedNote
                ];
            }
        });
    }, []);

    const deleteSelectedNotes = useCallback(() => {
        setNotes((prev) => {
            return prev.filter(note => {
                let isOk = true;
                selected.forEach(selectedNote => {
                    if(selectedNote.id === note.id) {
                        isOk = false;
                    }
                });
                return isOk;
            });
        });
        setMode(NoteMode.none);
    }, [
        selected,
        setNotes
    ]);
    return (
        <div className='list-component flexColumn'>
            <div className='flexSB'>
                <h1>My Lists</h1>
                <div className='flex noWrap'>
                    {selected.length > 1 && (
                        <>
                            {mode === NoteMode.deletion && (
                                <Button 
                                    onClick={deleteSelectedNotes}
                                >
                                    <Icon icon="Delete" />
                                </Button>
                            )}
                        </>
                    )}
                    <Button 
                        onClick={addNote}
                    >
                        <Icon icon="Plus" />
                    </Button>
                </div>
                
            </div>
            {activeNote ? (
                <section className='active-list-component'>
                    <CloseComponent action={() => setActiveNote(undefined)} />
                    <PageLayout 
                        pageLayout={noteLayout} 
                        formData={activeNote}
                        handleFormData={setActiveNote}
                    />
                </section>
            ) : (
                <section className='all-lists flex-block'>
                    {notes.map((note) => (
                        <NoteComponent 
                            key={`note-${note.id}`}
                            note={note} 
                            setActiveNote={setActiveNote} 
                            deleteNote={addNoteToSelected}
                            mode={mode}
                            selected={selected} 
                        />
                    ))}
                </section>
            )}
        </div>
    );
};

export interface iNoteComponent {
    note: iNote;
    setActiveNote: Dispatch<SetStateAction<iNote | undefined>>;
    deleteNote: (note: iNote, newMode?: NoteMode) => void;
    mode: NoteMode;
    selected: iNote[];
}

export const NoteComponent = ({
    note,
    setActiveNote,
    deleteNote,
    mode,
    selected
}: iNoteComponent) => {

    const noteSelected = useCallback((e: any) => {
        e.stopPropagation();
        setActiveNote(note);
    }, [
        note,
        setActiveNote
    ]);
    const sendDelete = useCallback((e: any) => {
        e.stopPropagation();
        deleteNote(note, NoteMode.deletion);
    }, [
        note,
        deleteNote
    ]);

    const selectionActive = useMemo(() => {
        switch (mode) {
            case NoteMode.deletion:
                return true;
            case NoteMode.none:
            default:
                return false;
        }
    }, [
        mode
    ]);

    const isSelected = useMemo(() => selected.filter(i => i.id === note.id).length > 0, [selected, note.id]);
    return (
        <div className={`note-component ${note.theme}`}>
            <div 
                className='left'
                onClick={() => setActiveNote(note)}
            >
                {selectionActive ? (
                    <div className={`note-checkbox ${isSelected ? 'selected' : ''}`}>
                        {isSelected && <Icon icon='Check' />}
                    </div>
                ) : (
                    <Icon icon={note.icon} />
                )}
                <h2 className='text-sub-headline'>{note.label}</h2>
            </div>
            <div className='right'>
                <button className="note-button" onClick={sendDelete}>
                    <Icon icon="Delete" />
                </button>
                <button className="note-button" onClick={noteSelected}>
                    <Icon icon="Edit" />
                </button>
            </div>
        </div>
    );
};