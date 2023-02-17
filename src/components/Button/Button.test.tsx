import React from "react";
import Button from "./Button";
import { render, fireEvent } from "@testing-library/react";
const defaultProps = {
    onClick: jest.fn(),
    text: "Submit",
};
test("Button component renders with correct text", () => {
    const { queryByText, rerender } = render(<Button {...defaultProps} />);
    expect(queryByText("Submit")).toBeTruthy();
    // Change props
    rerender(<Button {...defaultProps} text="Cancel" />);
    expect(queryByText("Cancel")).toBeTruthy();
});
test("calls correct function on click", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClick} />);
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
});