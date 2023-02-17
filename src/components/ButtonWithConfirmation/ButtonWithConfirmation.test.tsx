import React from "react";
import ButtonWithConfirmation from "./ButtonWithConfirmation";
import { render, screen, fireEvent } from "@testing-library/react";
const defaultProps = {
    buttonText: "Test",
    confirmationMessage: "Test message",
};
describe("Button with confirmation should", () => {
    test("render component", () => {
        render(<ButtonWithConfirmation {...defaultProps} />);
        expect(screen.getByRole("button", { name: /test/i })).toBeTruthy();
    });
    test("display confirmation dialog when button is triggered", () => {
        render(<ButtonWithConfirmation {...defaultProps} />);
        const button = screen.getByRole("button", { name: /test/i });
        expect(screen.queryByText("Test message")).toBeFalsy();
        fireEvent.click(button);
        expect(screen.getByText("Test message")).toBeTruthy();
    });
});