import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from './Button';

export default {
  title: 'ComponentLibrary/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: 'Hello world',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me',
};

