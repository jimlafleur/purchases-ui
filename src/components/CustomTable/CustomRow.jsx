import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const CustomRow = ({row, setIsEdit, setIsDelete, setCurrentRow, cells, editTooltip, deleteTooltip}) => {

    const openEditDialog = () => {
        setCurrentRow(row)
        setIsEdit(true);
    }

    const openDeleteDialog = () => {
        setCurrentRow(row)
        setIsDelete(true);
    }

    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
            <TableCell padding="checkbox"/>
            {cells(row)}
            <TableCell padding="checkbox">
                <Tooltip title={editTooltip}>
                    <EditIcon onClick={openEditDialog}/>
                </Tooltip>
            </TableCell>
            <TableCell padding="checkbox">
                <Tooltip title={deleteTooltip}>
                    <IconButton aria-label="delete">
                        <DeleteIcon onClick={openDeleteDialog}/>
                    </IconButton>
                </Tooltip>
            </TableCell>
        </TableRow>
    );
}

export default CustomRow