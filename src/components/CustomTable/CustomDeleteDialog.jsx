import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const CustomDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog, deleteMethod, tittle, message, showSuccess, deletedMessage}) => {

    const remove = () => {
        deleteMethod(currentRow.id, refreshData)
        closeDialog()
        showSuccess(deletedMessage)
    }

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>{tittle}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {message}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={remove} color="primary" autoFocus>
                    Да
                </Button>
                <Button onClick={closeDialog} color="primary">
                    Нет
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default CustomDeleteDialog
