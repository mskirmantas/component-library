import React from "react";
import ConfirmationDialog from "./ConfirmationDialog";
import { render, screen, fireEvent } from "@testing-library/react";
const defaultProps = {
    onYesClick: jest.fn(),
    onNoClick: jest.fn(),
    open: true,
    confirmationMessage: "Test message",
};
describe("Confirmation Dialog should", () => {
    test("render component if triggered", () => {
        render(<ConfirmationDialog {...defaultProps} />);
        const confirmationDialog = screen.queryByTestId("confirmation-dialog");
        expect(confirmationDialog).toBeTruthy();
    });
    test("not render confirmation dialog if not triggered", () => {
        render(<ConfirmationDialog {...defaultProps} open={false} />);
        const confirmationDialog = screen.queryByTestId("confirmation-dialog");
        expect(confirmationDialog).toBeNull();
    });
    test("have 2 action buttons", () => {
        const { getByTestId } = render(<ConfirmationDialog {...defaultProps} />);
        const dialogButtons = getByTestId("confirmation-dialog-actions");
        expect(dialogButtons.children.length).toBe(2);
    });
    test("have NO button working as expected", () => {
        const handleYes = jest.fn();
        const handleNo = jest.fn();
        const { getByTestId } = render(
            <ConfirmationDialog {...defaultProps} onNoClick={handleNo} onYesClick={handleYes} />
        );
        const noButton = getByTestId("confirmation-dialog-no-btn");
        fireEvent.click(noButton);
        expect(handleNo).toBeCalledTimes(1);
        expect(handleYes).toBeCalledTimes(0);
    });
    test("have YES button working as expected", () => {
        const handleYes = jest.fn();
        const handleNo = jest.fn();
        const { getByTestId } = render(
            <ConfirmationDialog {...defaultProps} onNoClick={handleNo} onYesClick={handleYes} />
        );
        const yesButton = getByTestId("confirmation-dialog-yes-btn");
        fireEvent.click(yesButton);
        expect(handleYes).toBeCalledTimes(1);
        expect(handleNo).toBeCalledTimes(0);
    });
    test("display correct confirmation message", () => {
        const text = "Your changes will be lost. Are you sure you want to exit?";
        render(<ConfirmationDialog {...defaultProps} confirmationMessage={text} />);
        const dialogDescription = screen.getByTestId("confirmation-dialog-description");
        expect(dialogDescription.textContent).toBe(text);
    });
});