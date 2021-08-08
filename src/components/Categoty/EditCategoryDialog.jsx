import React, {useState} from "react";
import {editCategory} from "../../service/categoryService";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";

const EditCategoryDialog = ({category, refreshCategories, isOpen, closeDialog}) => {
    const [name, setName] = useState(category.name)
    const [description, setDescription] = useState(category.description)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const descriptionChanged = event => {
        setDescription(event.target.value);
    }

    const save = () => {
        editCategory({name, description, id: category.id}, refreshCategories)
        closeDialog()
    }
    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Редактирование категории товара</DialogTitle>
            <DialogContent>
                <TextField value={name} onChange={nameChanged} label="Название"/>
                <TextField value={description} onChange={descriptionChanged} label="Описание"/>
            </DialogContent>
            <DialogActions>
                <Tooltip title="Сохранить категорию товара">
                    <Fab color="secondary" aria-label="save">
                        <SaveIcon onClick={save}/>
                    </Fab>
                </Tooltip>
                <Tooltip title="Отмена">
                    <Fab color="secondary" aria-label="save">
                        <CloseIcon onClick={closeDialog}/>
                    </Fab>
                </Tooltip>
            </DialogActions>
        </Dialog>
    )
}

export default EditCategoryDialog
