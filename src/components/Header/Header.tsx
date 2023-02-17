import React from "react";
import * as S from "./Header.style";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/globalStyles";
// Props need to be exported
export interface HeaderProps {
    toolName: string;
    advisorID: string | undefined;
}
const Header: React.FC<HeaderProps> = ({ toolName, advisorID }) => {
    return (
        <ThemeProvider theme={theme}>
            <S.Header data-testid="header">
                <div className="container">
                    <S.ToolName data-testid="header-tool-name">{toolName}</S.ToolName>
                    <S.AdvisorID data-testid="header-id-type">
                        Advisor ID:
                        <span data-testid="header-advisor-id">{advisorID}</span>
                    </S.AdvisorID>
                </div>
            </S.Header>
            <GlobalStyle />
        </ThemeProvider>
    );
};
export default Header;