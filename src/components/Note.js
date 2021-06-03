import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: rgb(59, 59, 59);
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: calc(25rem / 16);
  font-family: AB-marusan;
  border: none;
  color: rgb(186, 156, 123);
  margin: calc(20rem / 16) 0 calc(10rem / 16) calc(10rem / 16);
`;

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

const NoneNoteList = styled(NoteList)`
  padding: calc(10rem / 16);
  margin: calc(10rem / 16) 0 0 calc(10rem / 16);
  width: calc(300rem / 16);
`;

const ErrorMessage = styled(NoteList)`
  background-color: transparent;
  color: red;
  padding: calc(10rem / 16);
  margin: calc(10rem / 16) 0 0 calc(10rem / 16);
  width: calc(300rem / 16);
`;

const Label = styled.label`
  color: rgb(230, 226, 223);
  font-family: AB-marusan;
  font-size: calc(13rem / 16);
  margin-bottom: calc(5rem / 16);
`;

const CatLabel = styled(Label)`
  margin: calc(10rem / 16) 0 calc(5rem / 16) calc(5rem / 16);
`;

const AddingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: calc(10rem / 16) 0 0 calc(10rem / 16);
`;

const Form = styled.form`
  background-color: rgb(211, 194, 157);
  border-radius: calc(10rem / 16);
  display: flex;
  flex-direction: column;
  width: calc(300rem / 16);
`;

const InputBox = styled.input`
  background-color: rgb(208, 199, 185);
  border: none;
  border-radius: calc(10rem / 16);
  cursor: text;
  color: rgb(20, 14, 7);
  font-family: AB-marusan;
  text-decoration: none;
  margin: calc(2rem / 16);
  padding: calc(10rem / 16);
  line-height: 1.5;
`;

const TextAreaBox = styled.textarea`
  background-color: rgb(208, 199, 185);
  border: none;
  border-radius: calc(10rem / 16);
  cursor: text;
  color: rgb(20, 14, 7);
  font-family: AB-marusan;
  text-decoration: none;
  margin: calc(2rem / 16);
  padding: calc(10rem / 16);
  line-height: 1.5;
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
  /* margin-left: auto; */
  position: absolute;
  right: 0px;
  top: 0px;
  order: 1;
`;

const Note = (props) => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    title === '' || body === ''
      ? setError('Please enter some Title & Body.')
      : (setNotes([
          ...notes,
          {
            title,
            body,
          },
        ]),
        setTitle(''),
        setBody(''),
        setError(''),
        console.log(notes));
  };

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title));
  };

  return (
    <Wrapper>
      <Title>Notes</Title>
      {notes.length === 0 ? (
        <NoneNoteList>Make a note of it.</NoneNoteList>
      ) : (
        notes.map((note, key) => {
          return (
            <NoteWrapper key={`note_${key}`}>
              <NoteTitleWrapper>
                <NoteList>#{key}</NoteList>
                <NoteTitle>{note.title}</NoteTitle>
              </NoteTitleWrapper>
              <NoteBody>{note.body}</NoteBody>
              <RemoveButton onClick={() => removeNote(note.title)}>
                X
              </RemoveButton>
            </NoteWrapper>
          );
        })
      )}
      {error !== '' && <ErrorMessage>{error}</ErrorMessage>}
      <AddingWrapper>
        <Label>Add Note:</Label>
        <Form onSubmit={addNote}>
          <CatLabel>Title:</CatLabel>
          <InputBox
            value={title}
            placeholder={'please title'}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <CatLabel>Body:</CatLabel>
          <TextAreaBox
            value={body}
            placeholder={'please body'}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <OnButton>Submit</OnButton>
        </Form>
      </AddingWrapper>
    </Wrapper>
  );
};

export default Note;
