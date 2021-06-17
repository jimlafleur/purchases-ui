import React, {useState} from "react";
import {postLists} from "../../service/shoppingListService";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import TextField from "@material-ui/core/TextField";

const ShoppingListAddForm = ({fetchLists}) => {

    const [name, setName] = useState('')

    const nameChanged = event => {
        setName(event.target.value);
    }

    const saveList = () => {
        const list = {name}
        postLists(list, fetchLists)
        setName('')
    }

    return (
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Создайте новый список" value={name} onChange={nameChanged}/>
            <Fab color="primary" aria-label="add">
                <AddIcon type="submit" onClick={saveList}/>
            </Fab>
        </form>
    )
}

export default ShoppingListAddForm
