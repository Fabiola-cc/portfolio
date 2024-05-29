import React from 'react';
import About from '../Components/about';

export default {
  title: 'Components/About',
  component: About,
};

const Template = (args) => <About {...args} />;

export const Default = Template.bind({});
Default.args = {};
