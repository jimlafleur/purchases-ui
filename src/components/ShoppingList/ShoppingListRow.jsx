import React, {useState} from "react";
import {deleteList, editList} from "../../service/shoppingListService";
import {baseClientURL} from "../../constants";
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

const ShoppingListRow = ({list, refreshLists}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [newName, setNewName] = useState(list.name)

    const edit = () => {
        setIsEdit(true)
    }

    const save = () => {
        editList({name: newName, id: list.id}, refreshLists)
        setIsEdit(false)
    }

    const remove = () => {
        deleteList(list.id, refreshLists)
    }

    const nameChanged = event => {
        setNewName(event.target.value);
    }

    return (
        <tr>
            <td hidden={isEdit}>
                <a href={`${baseClientURL}lists/${list.id}`}>
                    {list.name}
                </a>
            </td>
            <td hidden={!isEdit}>
                <TextField id="outlined-basic" label="Название списка" value={newName} onChange={nameChanged}/>
            </td>
            <td hidden={isEdit} className="col-md-1">
                <Fab color="secondary" aria-label="edit">
                    <EditIcon onClick={edit}/>
                </Fab>
            </td>
            <td hidden={!isEdit} className="col-md-1">
                <Fab color="secondary" aria-label="save">
                    <SaveIcon onClick={save}/>
                </Fab>
            </td>
            <td className="col-md-1">
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={remove}/>
                </IconButton>
            </td>
        </tr>
    )
}

export default ShoppingListRow
