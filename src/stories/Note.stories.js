import React from 'react';
import Note from '../components/Note';
import NoteContext from '../context/NotesContext';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Note',
  component: Note,
  argTypes: {},
};

const Template = (args) => {
  return (
    <NoteContext.Provider value={{ dispatch: action('dispatch') }}>
      <Note {...args} />
    </NoteContext.Provider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  note: {
    title: 'Mock Title',
    body: 'Mock Body',
  },
  num: 1,
};
