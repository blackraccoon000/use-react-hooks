import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NotesContext from '../context/NotesContext';
import useMousePosition from '../hooks/useMousePosition';

const NoteWrapper = styled.div`
  align-items: center;
  background-color: rgb(211, 194, 157);
  border-radius: calc(10rem / 16);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: calc(10rem / 16);
  position: relative; //?
  margin: calc(10rem / 16) 0 0 calc(10rem / 16);
  width: calc(300rem / 16);
`;

const NoteTitleWrapper = styled(NoteWrapper)`
  width: auto;
  margin: 0 auto 0 0;
  flex-direction: row;
  order: 2;
`;

const NoteList = styled.p`
  background-color: rgb(211, 194, 157);
  border-radius: calc(10rem / 16);
  box-sizing: border-box;
  color: rgb(20, 14, 7);
  font-family: AB-marusan;
`;

const NoteTitle = styled(NoteList)`
  font-size: calc(15rem / 16);
  margin: 0 auto 0 calc(10rem / 16);
`;

const NoteBody = styled(NoteList)`
  font-size: calc(10rem / 16);
  margin: 0 auto 0 calc(10rem / 16);
  white-space: pre-wrap;
  order: 3;
`;

const OnButton = styled.button`
  background-color: rgb(59, 59, 59);
  border: none;
  border-radius: calc(10rem / 16);
  color: rgb(208, 199, 185);
  font-family: AB-marusan;
  margin: calc(5rem / 16);
`;

const RemoveButton = styled(OnButton)`
  position: absolute;
  right: 0px;
  top: 0px;
  order: 1;
`;

const Note = ({ note, num }) => {
  const { dispatch } = useContext(NotesContext);
  const position = useMousePosition();

  return (
    <NoteWrapper>
      <NoteTitleWrapper>
        <NoteList>#{num}</NoteList>
        <NoteTitle>{note.title}</NoteTitle>
      </NoteTitleWrapper>
      <NoteBody>{note.body}</NoteBody>
      <p>
        {position.x} / {position.y}
      </p>
      <RemoveButton
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        X
      </RemoveButton>
    </NoteWrapper>
  );
};

export default Note;
export { OnButton };
