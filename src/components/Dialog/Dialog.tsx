import React from "react";
import * as S from "./Dialog.style";
export interface DialogProps {
    open: boolean;
    children: any;
    dataTestId?: string;
}
const Dialog: React.FC<DialogProps> = ({ open, children, dataTestId }) => {
    return (
        <>
            {open && (
                <S.DialogBackdrop className={open ? "active" : ""} role="presentation">
                    <S.DialogContainer>
                        <S.Dialog data-testid={dataTestId}>{children}</S.Dialog>
                    </S.DialogContainer>
                </S.DialogBackdrop>
            )}
        </>
    );
};
export default Dialog;