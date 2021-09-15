import React, {useState} from "react";
import {postLists} from "../../service/shoppingListService";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import {isBlank} from "../../utils/utils";
import Tooltip from "@material-ui/core/Tooltip";
import {useAddFormStyles} from "../CustomTable/constants";

const ShoppingListAddForm = ({fetchLists}) => {
    const classes = useAddFormStyles();

    const [name, setName] = useState('')

    const nameChanged = event => {
        setName(event.target.value);
    }

    const saveList = () => {
        const list = {name}
        if (!isBlank(name)) {
            postLists(list, fetchLists)
        }
        setName('')
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root}>
                <TextField value={name} onChange={nameChanged} label="Название"/>
            </form>
            <Tooltip title="Добавить список">
                <Fab color="primary" aria-label="add">
                    <AddIcon type="submit" onClick={saveList}/>
                </Fab>
            </Tooltip>
        </div>
    )
}

export default ShoppingListAddForm
