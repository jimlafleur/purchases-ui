import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {deleteList} from "../../service/shoppingListService";

const DeleteListDialog = ({list, refreshLists, isOpen, closeDialog}) => {

    const remove = () => {
        deleteList(list.id, refreshLists)
        closeDialog()
    }

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Удаление списка покупок</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Вы действительно хотите удалить список покупок '{list.name}'?
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

export default DeleteListDialog
