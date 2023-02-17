import React from "react";
import Spinner from "./Spinner";

import { render, screen } from "@testing-library/react";
describe("Spinner should", () => {
    test("render component", () => {
        render(<Spinner isLoading={true} />);
        const spinner = screen.queryByTestId("loading-spinner");
        expect(spinner).toBeTruthy();
    });
    test("not be visible if no loading is in progress", () => {
        render(<Spinner isLoading={false} />);
        const spinner = screen.queryByTestId("loading-spinner");
        expect(spinner).toBeNull();
    });
});