import styled from "styled-components";
import theme from "../../styles/theme";
export const Header = styled.header`
    height: 100px;
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;
    background-color: ${theme.color.navy};
    color: ${theme.color.white};
    padding: 36px 0;
    div:first-child {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    @media screen and (max-width: ${theme.screen.mobile}) {
        height: 94px;
        padding: 38px 0 37px;
    }
`;
export const ToolName = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
    @media (max-width: ${theme.screen.tablet}) {
        font-size: 20px;
    }
    @media (max-width: ${theme.screen.mobile}) {
        font-size: 16px;
    }
`;
export const AdvisorID = styled.h2`
    margin: auto 0;
    font-weight: bold;
    font-size: 18px;
    @media (max-width: ${theme.screen.mobile}) {
        font-size: 14px;
    }
    span {
        padding-left: 7px;
        color: ${theme.color.stone};
        font-weight: normal;
        @media screen and (max-width: ${theme.screen.mobile}) {
            padding-left: 5px;
        }
    }
`;