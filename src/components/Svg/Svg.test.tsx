import React from "react";
import { render } from "@testing-library/react";
import Svg from "./Svg";
import { PrintIcon } from "../../assets/icons/Icons";
describe("Svg component", () => {
    test("should match a snapshot", () => {
        const { container } = render(<Svg src={PrintIcon} />);
        expect(container).toMatchSnapshot();
    });
});