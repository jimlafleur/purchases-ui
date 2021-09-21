import React, {useEffect, useState} from "react";
import {putCategory} from "../../service/categoryService";
import {
    CATEGORY_EDIT_DIALOG_TITTLE,
    CATEGORY_EDITED,
    CATEGORY_ERROR,
    CATEGORY_SAVE_TOOLTIP,
    validateCategory
} from "./categoryConstants";
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

const CategoryEditDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess, showError}) => {

    const classes = useAddFormStyles();
    const [name, setName] = useState(currentRow?.name)
    const [description, setDescription] = useState(currentRow?.description)

    useEffect(() => {
        setName(currentRow?.name)
        setDescription(currentRow?.description)
    }, [currentRow])

    const nameChanged = event => {
        setName(event.target.value);
    }

    const descriptionChanged = event => {
        setDescription(event.target.value);
    }

    const resetCategoryForm = () => {
        setName(currentRow?.name)
        setDescription(currentRow?.description)
    }

    const save = () => {
        const newCategory = {name, description, id: currentRow?.id}
        if (validateCategory(newCategory)) {
            putCategory(newCategory, refreshData)
            closeDialog()
            showSuccess(CATEGORY_EDITED)
        } else {
            showError(CATEGORY_ERROR)
        }
    }

    const cancel = () => {
        closeDialog()
        resetCategoryForm()
    }

    return (
        <Dialog open={isOpen} onClose={cancel}>
            <DialogTitle>{CATEGORY_EDIT_DIALOG_TITTLE}</DialogTitle>
            <DialogContent>
                <form className={classes.root}>
                    <TextField value={name} onChange={nameChanged} label="Название"/>
                    <TextField value={description} onChange={descriptionChanged} label="Описание"/>
                </form>
            </DialogContent>
            <DialogActions>
                <Tooltip title={CATEGORY_SAVE_TOOLTIP}>
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

export default CategoryEditDialog
