import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import CloseIcon from "@material-ui/icons/Close";
import {useAddFormStyles} from "./constants";

const CustomEditDialog = ({states, actions, validate, resetForm, refreshData, isOpen, closeDialog, saveMethod, getObject, fields, tittle, saveTooltip}) => {
    const classes = useAddFormStyles();

    const save = () => {
        const newObject = getObject()
        if (validate(newObject)) {
            saveMethod(newObject, refreshData)
            closeDialog()
        }
    }

    const cancel = () => {
        closeDialog()
        resetForm()
    }

    return (
        <Dialog open={isOpen} onClose={cancel}>
            <DialogTitle>{tittle}</DialogTitle>
            <DialogContent>
                <form className={classes.root}>
                    {fields({states, actions})}
                </form>
            </DialogContent>
            <DialogActions>
                <Tooltip title={saveTooltip}>
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

export default CustomEditDialog
