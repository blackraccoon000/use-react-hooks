import React from 'react';
import Note from '../components/Note';

export default {
  title: 'Components/Note',
  component: Note,
  argTypes: {},
};

const Template = (args) => <Note {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
