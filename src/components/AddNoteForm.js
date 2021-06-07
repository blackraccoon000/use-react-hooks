import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { OnButton } from './Note';
import NotesContext from '../context/NotesContext';

const AddingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: calc(10rem / 16);
`;

const Label = styled.label`
  color: rgb(230, 226, 223);
  font-family: AB-marusan;
  font-size: calc(13rem / 16);
  margin-bottom: calc(5rem / 16);
`;

const Form = styled.form`
  background-color: rgb(211, 194, 157);
  border-radius: calc(10rem / 16);
  display: flex;
  flex-direction: column;
  width: calc(300rem / 16);
`;

const CatLabel = styled(Label)`
  margin: calc(10rem / 16) 0 calc(5rem / 16) calc(5rem / 16);
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

const AddNoteForm = ({ setError }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { dispatch } = useContext(NotesContext);

  const addNote = (e) => {
    e.preventDefault();
    title === '' || body === ''
      ? setError('Please enter some Title & Body.')
      : (dispatch({
          type: 'ADD_NOTE',
          title,
          body,
        }),
        console.log(title, body),
        setTitle(''),
        setBody(''),
        setError(''));
  };

  return (
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
  );
};

export default AddNoteForm;
