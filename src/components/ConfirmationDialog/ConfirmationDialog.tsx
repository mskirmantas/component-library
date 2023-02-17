import * as React from "react";
import Button from "../Button/Button";
import Dialog from "../Dialog/Dialog";
import * as S from "./ConfirmationDialog.style";
export interface ConfirmationDialogProps {
    onYesClick: () => void;
    onNoClick: () => void;
    open: boolean;
    confirmationMessage: string;
}
const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({
    open,
    onYesClick,
    onNoClick,
    confirmationMessage,
}) => {
    return (
        <Dialog open={open} dataTestId="confirmation-dialog">
            <S.DialogContent>
                <p data-testid="confirmation-dialog-description">{confirmationMessage}</p>
            </S.DialogContent>
            <S.DialogActions data-testid="confirmation-dialog-actions">
                <Button
                    dataTestId="confirmation-dialog-no-btn"
                    variant="outlined"
                    text="No"
                    onClick={onNoClick}
                />
                <Button
                    dataTestId="confirmation-dialog-yes-btn"
                    variant="contained"
                    text="Yes"
                    onClick={onYesClick}
                />
            </S.DialogActions>
        </Dialog>
    );
};
export default ConfirmationDialog;