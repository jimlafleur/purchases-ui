import React, {useState} from "react";
import {postLists} from "../../service/shoppingListService";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import {useAddFormStyles} from "../CustomTable/constants";
import {SHOPPING_LIST_ADDED, SHOPPING_LIST_ERROR, validateShoppingList} from "./shoppingListConstants";

const ShoppingListAddForm = ({fetchLists, showSuccess, showError}) => {
    const classes = useAddFormStyles();

    const [name, setName] = useState('')

    const nameChanged = event => {
        setName(event.target.value);
    }

    const saveList = () => {
        const list = {name}
        if (validateShoppingList(list)) {
            postLists(list, fetchLists)
            setName('')
            showSuccess(SHOPPING_LIST_ADDED)
        } else {
            showError(SHOPPING_LIST_ERROR)
        }
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
