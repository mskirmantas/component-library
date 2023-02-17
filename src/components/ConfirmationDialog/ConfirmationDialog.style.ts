import styled from "styled-components";
import theme from "../../styles/theme";
export const DialogContent = styled.div`
    padding: 30px 0 80px;
    p {
        font-size: 18px;
        font-weight: 400;
        line-height: 1.53;
        letter-spacing: normal;
        text-align: center;
        color: ${theme.color.black};
    }
    @media screen and (max-width: ${theme.screen.tablet}) {
        padding: 10px 0 40px;
    }
    @media screen and (max-width: ${theme.screen.mobile}) {
        padding: 15px 0 30px;
        p {
            text-align: left;
        }
    }
`;
export const DialogActions = styled.div`
    display: flex;
    justify-content: center;
    && {
        button {
            margin: 0 5px;
            width: 173px;
            height: 60px;
        }
        @media screen and (max-width: ${theme.screen.mobile}) {
            margin: 0 -10px;
        }
    }
`;