import React from 'react';
import NoteList from '../components/NoteList';
import NoteContext from '../context/NotesContext';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/NoteList',
  component: NoteList,
  argTypes: {},
};

const notes = [
  {
    title: 'sample title 1',
    body: 'sample body 1',
  },
  {
    title: 'sample title 2',
    body: 'sample body 2',
  },
  {
    title: 'sample title 3',
    body: 'sample body 3',
  },
];

const Template = (args) => {
  return (
    <NoteContext.Provider value={{ dispatch: action('dispatch'), notes }}>
      <NoteList {...args} />
    </NoteContext.Provider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
