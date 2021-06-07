import React from 'react';
import NoteApp from '../components/NoteApp';

export default {
  title: 'Components/NoteApp',
  component: NoteApp,
  argTypes: {},
};

const Template = (args) => <NoteApp {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
