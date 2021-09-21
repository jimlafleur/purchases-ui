import React, {useEffect, useState} from "react";
import {useAddFormStyles} from "../CustomTable/constants";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import {
    SHOPPING_LIST_EDIT_DIALOG_TITTLE,
    SHOPPING_LIST_SAVE_TOOLTIP,
    validateShoppingList
} from "./shoppingListConstants";
import {putList} from "../../service/shoppingListService";
import {PRODUCT_EDITED, PRODUCT_ERROR} from "../Product/productConstants";

const ShoppingListEditDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess, showError}) => {

    const classes = useAddFormStyles();
    const [name, setName] = useState(currentRow?.name)

    useEffect(() => {
        setName(currentRow.name)
    }, [currentRow])

    const nameChanged = event => {
        setName(event.target.value);
    }

    const resetCategoryForm = () => {
        setName(currentRow.name)
    }

    const save = () => {
        const newShoppingList = {name, id: currentRow.id}
        if (validateShoppingList(newShoppingList)) {
            putList(newShoppingList, refreshData)
            closeDialog()
            showSuccess(PRODUCT_EDITED)
        } else {
            showError(PRODUCT_ERROR)
        }
    }

    const cancel = () => {
        closeDialog()
        resetCategoryForm()
    }

    return (
        <Dialog open={isOpen} onClose={cancel}>
            <DialogTitle>{SHOPPING_LIST_EDIT_DIALOG_TITTLE}</DialogTitle>
            <DialogContent>
                <form className={classes.root}>
                    <TextField value={name} onChange={nameChanged} label="Название"/>
                </form>
            </DialogContent>
            <DialogActions>
                <Tooltip title={SHOPPING_LIST_SAVE_TOOLTIP}>
                    <Fab color="secondary" aria-label="save">
                        <SaveIcon onClick={save}/>
                    </Fab>
                </Tooltip>
                <Tooltip title="Отмена">
                    <Fab color="secondary" aria-label="save">
                        <CloseIcon onClick={cancel}/>
                    </Fab>
                </Tooltip>
            </DialogActions>
        </Dialog>
    )
}

export default ShoppingListEditDialog
