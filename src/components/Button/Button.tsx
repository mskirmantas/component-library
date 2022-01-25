import React from "react";
// import styled from "styled-components";

interface ButtonProps {
    label: string
}

const Button = (props: ButtonProps) => {
    return (<button>{props.label}</button>);
}

export default Button;

// const StyledButton = styled.button`
//     background-color: blueviolet;
//     border: none;
//     border-radius: 10px;
//     padding: 10px;
//     font-weight: 600;
//     color: beige;
//     text-transform: capitalize;
//     cursor: pointer;
// `;