import React, { useEffect, useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NoteList from './NoteList';
import AddNoteForm from './AddNoteForm';
import notesReducer from '../reducers/notesReducer';
import NotesContext from '../context/NotesContext';

const Wrapper = styled.div`
  background-color: rgb(59, 59, 59);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: calc(25rem / 16);
  font-family: AB-marusan;
  border: none;
  color: rgb(186, 156, 123);
  margin: calc(20rem / 16) 0 calc(10rem / 16) calc(10rem / 16);
`;

const NoteListComp = styled.p`
  background-color: rgb(211, 194, 157);
  border-radius: calc(10rem / 16);
  box-sizing: border-box;
  color: rgb(20, 14, 7);
  font-family: AB-marusan;
`;

const NoneNoteList = styled(NoteListComp)`
  padding: calc(10rem / 16);
  margin: calc(10rem / 16) 0 0 calc(10rem / 16);
  width: calc(300rem / 16);
`;

const ErrorMessage = styled(NoteListComp)`
  background-color: transparent;
  color: red;
  padding: calc(10rem / 16);
  margin: calc(10rem / 16) 0 0 calc(10rem / 16);
  width: calc(300rem / 16);
`;

const NoteApp = (props) => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  const [error, setError] = useState('');

  useEffect(() => {
    const localNotesData = JSON.parse(localStorage.getItem('notes'));
    localNotesData &&
      dispatch({ type: 'POPULATE_NOTES', notes: localNotesData });
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <Wrapper>
        <Title>Notes</Title>
        {notes.length === 0 ? (
          <NoneNoteList>Make a note of it.</NoneNoteList>
        ) : (
          <NoteList />
        )}
        {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
        <AddNoteForm setError={setError} />
      </Wrapper>
    </NotesContext.Provider>
  );
};

export default NoteApp;
