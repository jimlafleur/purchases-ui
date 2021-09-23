import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import PlanAddForm from "./PlanAddForm";

const AddPlanDialog = ({isOpen, closeDialog, refreshPlans}) => {


    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Добавление плана</DialogTitle>
            <DialogContent>
                <PlanAddForm closeDialog={closeDialog} refreshPlans={refreshPlans}/>
            </DialogContent>
            <DialogActions>
            </DialogActions>
        </Dialog>
    )
}

export default AddPlanDialog
