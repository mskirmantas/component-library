import React from "react";
import SVG, { Props as SVGProps } from "react-inlinesvg";
export interface SvgProps extends SVGProps {
    src: string;
    size?: number;
    width?: number;
    height?: number;
    color?: string;
    testId?: string;
}
const Svg: React.FC<SvgProps> = ({ src, size, color, width, height, testId }) => {
    return (
        <SVG
            src={src}
            width={size ?? width ?? 16}
            height={size ?? height ?? 16}
            color={color}
            data-testid={testId}
        />
    );
};
export default Svg;