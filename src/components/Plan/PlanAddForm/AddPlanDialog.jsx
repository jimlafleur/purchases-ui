import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import PlanAddForm from "./PlanAddForm";

const AddPlanDialog = ({isOpen, closeDialog, refreshPlans}) => {

    return (
        <Dialog open={isOpen} onClose={closeDialog}>
            <DialogTitle>Добавление плана</DialogTitle>
            <DialogContent>
                <PlanAddForm closeDialog={closeDialog} refreshPlans={refreshPlans}/>
            </DialogContent>
        </Dialog>
    )
}

export default AddPlanDialog
