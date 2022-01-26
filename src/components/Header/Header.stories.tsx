import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Header  from './Header';

export default {
  title: 'ComponentLibrary/Header',
  component: Header,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  toolName: 'Hello world',
  advisorID: "1224424"
};


