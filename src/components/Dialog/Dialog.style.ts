import styled from "styled-components";
import theme from "../../styles/theme";

export const DialogBackdrop = styled.div`
    background-color: rgba(121, 121, 121, 0.3);
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    visibility: hidden;
    opacity: 0;
    &.active {
        visibility: visible;
        opacity: 1;
        transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }
`;
export const DialogContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Dialog = styled.div`
    background-color: ${theme.color.white};
    color: rgba(0, 0, 0, 0.87);
    margin: 32px;
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    max-height: calc(100% - 64px);
    max-width: 600px;
    padding: 30px 35px;
    @media screen and (max-width: ${theme.screen.mobile}) {
        margin: 10px;
        padding: 30px;
    }
`;
