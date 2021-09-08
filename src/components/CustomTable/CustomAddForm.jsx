import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import {useAddFormStyles} from "./constants";

const CustomAddForm = ({states, actions, refreshData, resetForm, validate, saveMethod, getObject, fields,  saveTooltip}) => {
    const classes = useAddFormStyles();

    const save = () => {
        const newObject = getObject()
        if (validate(newObject)) {
            saveMethod(newObject, refreshData)
            resetForm()
        }
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root}>
                {fields({states, actions})}
            </form>
            <Tooltip title={saveTooltip}>
                <Fab color="primary" aria-label="add">
                    <AddIcon type="submit" onClick={save}/>
                </Fab>
            </Tooltip>
        </div>
    )
}

export default CustomAddForm
