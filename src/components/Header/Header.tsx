import React from "react";
import styled from "styled-components";

export interface HeaderProps {
    toolName: string,
    advisorID: string
}

const Button = (props: HeaderProps) => {
    return (<StyledHeader>
        <Container>
            <h1>{props.toolName}</h1>
            <h2>Advisor ID: {props.advisorID}</h2>
        </Container>
    </StyledHeader>);
}

export default Button;

const StyledHeader = styled.header`
    width: 100%;
    height: 100px;
    background-color: navy;
    color: white;
    padding: 0 30px;
   
`;

const Container = styled.div`
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;