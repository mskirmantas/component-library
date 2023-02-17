import * as React from "react";
import Button from "../Button/Button";
import ConfirmationDialog from "../ConfirmationDialog/ConfirmationDialog";

export interface ButtonWithConfirmationProps {
    onConfirmationNoClick?: () => void;
    onConfirmationYesClick?: () => void;
    dataTestId?: string;
    buttonText: string;
    variant?: "outlined" | "contained";
    confirmationMessage: string;
}
const ButtonWithConfirmation: React.FC<ButtonWithConfirmationProps> = ({
    dataTestId,
    buttonText,
    variant,
    onConfirmationNoClick,
    onConfirmationYesClick,
    confirmationMessage,
}) => {
    const [showDialog, setShowDialog] = React.useState<boolean>(false);
    const openConfirmationDialog = () => {
        setShowDialog(true);
    };
    const closeConfirmationDialog = () => {
        setShowDialog(false);
    };
    const handleNoClick = () => {
        closeConfirmationDialog();
        if (onConfirmationNoClick) {
            onConfirmationNoClick();
        }
    };
    const handleYesClick = () => {
        closeConfirmationDialog();
        if (onConfirmationYesClick) {
            onConfirmationYesClick();
        }
    };
    const handleCancelClick = () => {
        openConfirmationDialog();
    };
    return (
        <>
            <Button
                dataTestId={dataTestId}
                text={buttonText}
                variant={variant ? variant : "outlined"}
                onClick={handleCancelClick}
            />
            <ConfirmationDialog
                confirmationMessage={confirmationMessage}
                open={showDialog}
                onYesClick={handleYesClick}
                onNoClick={handleNoClick}
            />
        </>
    );
};
export default ButtonWithConfirmation;