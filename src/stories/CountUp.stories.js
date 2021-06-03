import React from 'react';
import CountUp from '../components/CountUp';

export default {
  title: 'Components/CountUp',
  component: CountUp,
  argTypes: {},
};

const Template = (args) => <CountUp {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  count: 10,
  text: 'hoge',
};
