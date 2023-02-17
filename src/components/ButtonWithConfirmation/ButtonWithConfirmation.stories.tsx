import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonWithConfirmation from "./ButtonWithConfirmation";
export default {
    title: "Shared-ui/Button with Confirmation",
    component: ButtonWithConfirmation,
} as ComponentMeta<typeof ButtonWithConfirmation>;
const Template: ComponentStory<typeof ButtonWithConfirmation> = (args) => (
    <ButtonWithConfirmation {...args} />
);
export const OutlinedConfirmationButton = Template.bind({});
OutlinedConfirmationButton.args = {
    buttonText: "Hello World",
    variant: "outlined",
    confirmationMessage: "Hello world. Are you sure you want to proceed? ",
};
export const ContainedConfirmationButton = Template.bind({});
ContainedConfirmationButton.args = {
    buttonText: "Hello World",
    variant: "contained",
    confirmationMessage: "Hello world. Are you sure you want to proceed? ",
};