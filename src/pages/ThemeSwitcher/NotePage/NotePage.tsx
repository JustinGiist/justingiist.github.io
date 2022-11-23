import { useState } from 'react';
import { iNote, NotesComponent } from './components/NotesComponent/NotesComponent';
import './NotePage.scss';

const NotesPage = () => {
    const [notes, setNotes] = useState<iNote[]>([]);
    return (
        <div
            id="NotePage"
            className="flexColumn"
        >
            <NotesComponent notes={notes} setNotes={setNotes} />
        </div>
    );
};
export default NotesPage;

