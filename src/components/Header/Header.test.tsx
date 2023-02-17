import React from "react";
import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
    test("should display DM tool name", () => {
        render(<Header advisorID="A00000" toolName="Address Change" />);
        expect(screen.getByText("Address Change")).toBeTruthy();
    });
    test("should display advisor ID", () => {
        const { rerender } = render(<Header advisorID="A00000" toolName="Tool" />);
        const headerAdvisorID = screen.getByTestId("header-advisor-id");
        expect(headerAdvisorID.textContent).not.toBe("");
        expect(headerAdvisorID.textContent).toBe("A00000");
        // Change props
        rerender(<Header advisorID="C10000" toolName="Tool" />);
        expect(headerAdvisorID.textContent).toBe("C10000");
    });
});