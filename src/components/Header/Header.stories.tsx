import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "./Header";
export default {
  title: "Shared-ui/Header",
  component: Header,
} as ComponentMeta<typeof Header>;
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;
export const HelloWorld = Template.bind({});
HelloWorld.args = {
  toolName: "Hello world",
  advisorID: "C224424",
};
export const Withdrawals = Template.bind({});
Withdrawals.args = {
  toolName: "Withdrawals",
  advisorID: "C255524",
};