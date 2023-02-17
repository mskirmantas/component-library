import styled from "styled-components";
import theme from "../../styles/theme";
import { ButtonProps } from "./Button";
export const Button = styled.button<ButtonProps>`
  && {
    border: 1px solid ${theme.color.blue};
    border-style: solid;
    border-radius: 30px;
    outline: none;
    font-size: 18px;
    text-align: center;
    width: 205px;
    height: 60px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 1.16;
    margin: 0px 15px;
    max-height: 60px;
    cursor: pointer;
    transition: transform 0.35s ease;
    &:active {
      transform: scale(0.97);
    }
    @media (max-width: ${theme.screen.mobile}) {
      margin: 0px 5px;
      width: 173px;
    }
    ${(props) =>
      props.variant === "outlined" &&
      `
        color: ${theme.color.blue};
        border-color: ${theme.color.blue};
        background-color: ${theme.color.white};
    `}
    ${(props) =>
      props.variant === "contained" &&
      `
        color: ${theme.color.white};
        background-color: ${theme.color.blue};
    `}
    ${(props) =>
      props.disabled &&
      `
          background-color: ${theme.color.grey};
          border-color: ${theme.color.grey};
          cursor: default;
      `}
  }
`;