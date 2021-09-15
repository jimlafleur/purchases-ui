import React, {useState} from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import {putList} from "../../service/shoppingListService";

const EditListDialog = ({list, refreshLists, isOpen, closeDialog}) => {
    const [name, setName] = useState(list.name)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const save = () => {
        putList({name, id: list.id}, refreshLists)
        closeDialog()
    }
    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Редактирование списка покупок</DialogTitle>
            <DialogContent>
                <TextField value={name} onChange={nameChanged} label="Название"/>
            </DialogContent>
            <DialogActions>
                <Tooltip title="Сохранить">
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

export default EditListDialog
