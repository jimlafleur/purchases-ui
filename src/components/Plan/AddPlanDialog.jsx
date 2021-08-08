import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import PlanAddForm from "./PlanAddForm";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

const AddPlanDialog = ({isOpen, closeDialog}) => {

    const add = () => {
        // deleteCategory(category.id, refreshCategories)
        closeDialog()
    }

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Добавление плана</DialogTitle>
            <DialogContent>
                <PlanAddForm/>
            </DialogContent>
            <DialogActions>
                <Tooltip title="Добавить план">
                    <Fab color="secondary" aria-label="save">
                        <AddIcon onClick={add}/>
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

export default AddPlanDialog
