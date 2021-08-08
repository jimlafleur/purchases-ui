import React from "react";
import {deleteCategory} from "../../service/categoryService";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const DeleteCategoryDialog = ({category, refreshCategories, isOpen, closeDialog}) => {

    const remove = () => {
        deleteCategory(category.id, refreshCategories)
        closeDialog()
    }

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Удаление категории товара</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Вы действительно хотите удалить категорию товара '{category.name}'? Данное действие также удалит все
                    продукты и покупки, связанные с этой категорией
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

export default DeleteCategoryDialog
