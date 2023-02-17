import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyles";
import * as S from "./Button.style";
export interface ButtonProps {
    text: string;
    variant?: "outlined" | "contained";
    onClick: () => void;
    disabled?: boolean;
    dataTestId?: string;
}
const Button: React.FC<ButtonProps> = ({
    text,
    variant,
    onClick,
    disabled,
    dataTestId,
}) => {
    return (
        <ThemeProvider theme={theme}>
            <S.Button
                type="button"
                variant={variant}
                onClick={onClick}
                text={text}
                disabled={disabled}
                data-testid={dataTestId}
            >
                {text}
            </S.Button>
            <GlobalStyle />
        </ThemeProvider>
    );
};
export default Button;