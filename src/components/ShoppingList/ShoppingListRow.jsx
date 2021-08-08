import React, {useState} from "react";
import {baseClientURL} from "../../constants";
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import EditListDialog from "./EditListDialog";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteListDialog from "./DeleteListDialog";

const ShoppingListRow = ({list, refreshLists}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false);

    const openDeleteDialog = () => {
        setIsDelete(true);
    }

    const closeDeleteDialog = () => {
        setIsDelete(false);
    }

    const openEditDialog = () => {
        setIsEdit(true);
    }

    const closeEditDialog = () => {
        setIsEdit(false);
    }

    return (
        <div>
            <EditListDialog list={list}
                            refreshLists={refreshLists}
                            isOpen={isEdit}
                            closeDialog={closeEditDialog}/>
            <DeleteListDialog list={list}
                              refreshLists={refreshLists}
                              isOpen={isDelete}
                              closeDialog={closeDeleteDialog}/>
            <tr>
                <td>
                    <a href={`${baseClientURL}lists/${list.id}`}>
                        {list.name}
                    </a>
                </td>
                <td>
                    <Tooltip title="Переименовать список">
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon onClick={openEditDialog}/>
                        </Fab>
                    </Tooltip>

                </td>
                <td>
                    <Tooltip title="Удалить список">
                        <IconButton aria-label="delete">
                            <DeleteIcon onClick={openDeleteDialog}/>
                        </IconButton>
                    </Tooltip>
                </td>
            </tr>
        </div>
    )
}

export default ShoppingListRow
