import React, {useState} from "react";
import {baseClientURL} from "../../constants";
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";
import EditListDialog from "./EditListDialog";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteListDialog from "./DeleteListDialog";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

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
        <TableRow>
            <TableCell align="left">
                <Tooltip title="Кликните по названию списка, чтобы открыть его">
                    <a href={`${baseClientURL}lists/${list.id}`}>
                        {list.name}
                    </a>
                </Tooltip>
            </TableCell>

            <TableCell align="right" width={10}>
                <Tooltip title="Переименовать список">
                    <Fab color="secondary" aria-label="edit">
                        <EditIcon onClick={openEditDialog}/>
                    </Fab>
                </Tooltip>
            </TableCell>

            <TableCell align="right" width={10}>
                <Tooltip title="Удалить список">
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={openDeleteDialog}/>
                    </IconButton>
                </Tooltip>
            </TableCell>
            <EditListDialog list={list}
                            refreshLists={refreshLists}
                            isOpen={isEdit}
                            closeDialog={closeEditDialog}/>
            <DeleteListDialog list={list}
                              refreshLists={refreshLists}
                              isOpen={isDelete}
                              closeDialog={closeDeleteDialog}/>

        </TableRow>
    )
}

export default ShoppingListRow
