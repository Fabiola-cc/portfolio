import React from 'react';
import Contacto from '../Components/contact';

export default {
  title: 'Components/Contact',
  component: Contacto,
};

const Template = (args) => (
    <div style={{ backgroundColor: '#000000', padding: '20px', height: '100vh' }}>
      <Contacto {...args} />
    </div>
  );

export const Default = Template.bind({});
Default.args = {};
