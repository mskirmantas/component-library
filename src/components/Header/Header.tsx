import React from "react";
// import styled from "styled-components";

import "./Header.css"

export interface HeaderProps {
    toolName: string,
    advisorID: string
}

const Header = (props: HeaderProps) => {
    return (<header>
        <div className="dmt-container">
            <h1>{props.toolName}</h1>
            <h2>Advisor ID: {props.advisorID}</h2>
        </div>
    </header>);
}

export default Header;

// const StyledHeader = styled.header`
//     width: 100%;
//     height: 100px;
//     background-color: navy;
//     color: white;
//     padding: 0 30px;
   
// `;

// const Container = styled.div`
//     max-width: 900px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin: 0 auto;
// `;