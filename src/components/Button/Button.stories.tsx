import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
export default {
    title: "Shared-ui/Button",
    component: Button,
} as ComponentMeta<typeof Button>;
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
    text: "Click me",
    onClick: () => {},
    variant: "outlined",
};
export const ContainedButton = Template.bind({});
ContainedButton.args = {
    text: "Click me",
    onClick: () => {},
    variant: "contained",
};