import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ConfirmationDialog from "./ConfirmationDialog";
export default {
    title: "Shared-ui/Confirmation Dialog",
    component: ConfirmationDialog,
} as ComponentMeta<typeof ConfirmationDialog>;
const Template: ComponentStory<typeof ConfirmationDialog> = (args) => (
    <ConfirmationDialog {...args} />
);
export const HelloWorld = Template.bind({});
HelloWorld.args = {
    onYesClick: () => {},
    onNoClick: () => {},
    open: true,
    confirmationMessage: "Hello world. Are you sure you want to proceed? ",
};