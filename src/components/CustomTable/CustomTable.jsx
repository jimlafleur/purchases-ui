import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {getComparator, stableSort} from "../../utils/tableUtils";
import CustomTableToolbar from "./CustomTableToolbar";
import CustomTableHead from "./CustomTableHead";

const CustomTable = ({rows, headCells, createRow, editDialog, refreshData, tittle, deleteDialog, deleteRequest}) => {

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [currentRow, setCurrentRow] = useState({});

    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false);

    const closeDeleteDialog = () => {
        setIsDelete(false);
    }
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const closeDialog = () => {
        setIsEdit(false);
    }

    return (
        <div>
            {editDialog({currentRow, refreshData, closeDialog, isOpen: isEdit})}
            {deleteDialog({currentRow, refreshData, isOpen: isDelete, closeDialog: closeDeleteDialog})}

            <Paper>
                <CustomTableToolbar tittle={tittle} count={rows.length}/>
                <TableContainer>
                    <Table>
                        <CustomTableHead
                            cells={headCells}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .map(row => createRow({
                                    row,
                                    setIsEdit,
                                    setIsDelete,
                                    setCurrentRow
                                }))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CustomTable