import React, { useContext } from 'react';
import Note from './Note';
import NotesContext from '../context/NotesContext';

const NoteList = ({ removeNote }) => {
  const { notes } = useContext(NotesContext);
  return notes.map((note, num) => (
    <Note
      key={`${note.title}_${num}`}
      note={note}
      num={num}
      removeNote={removeNote}
    />
  ));
};

export default NoteList;
