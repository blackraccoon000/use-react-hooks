import React, { useState } from 'react';
import AddNoteForm from '../components/AddNoteForm';
import NoteContext from '../context/NotesContext';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/AddNoteForm',
  component: AddNoteForm,
  argTypes: {},
};

const Template = (args) => {
  const [error, setError] = useState('');
  return (
    <NoteContext.Provider
      value={{
        dispatch: action('dispatch'),
      }}
    >
      <AddNoteForm {...args} setError={setError} />
    </NoteContext.Provider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
