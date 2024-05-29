import React from 'react';
import Navbar from '../Components/navBar';

export default {
  title: 'Components/Navbar',
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  homeRef: { current: document.createElement('div') },
  aboutRef: { current: document.createElement('div') },
  projectsRef: { current: document.createElement('div') },
  contactRef: { current: document.createElement('div') },
};
