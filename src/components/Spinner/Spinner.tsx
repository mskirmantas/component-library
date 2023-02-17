import React, { useEffect } from "react";
import Svg from "../Svg/Svg";
import { SpinnerIcon } from "../../assets/icons/Icons";
import * as S from "./Spinner.style";
export interface SpinnerProps {
    isLoading: boolean;
}
const Spinner: React.FC<SpinnerProps> = ({ isLoading }) => {
    const handlePageScroll = () => {
        const bodyClasses = document.body.classList;
        isLoading ? bodyClasses.add("no-scroll") : bodyClasses.remove("no-scroll");
    };
    useEffect(() => {
        handlePageScroll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);
    return (
        <>
            {isLoading && (
                <S.SpinnerContainer data-testid="loading-spinner">
                    <Svg src={SpinnerIcon} size={75} data-testid="loading-spinner-icon" />
                </S.SpinnerContainer>
            )}
        </>
    );
};
export default Spinner;