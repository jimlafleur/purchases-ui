import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {getComparator, stableSort} from "../../utils/tableUtils";
import CustomTableToolbar from "./CustomTableToolbar";
import CustomTableHead from "./CustomTableHead";
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const CustomTable = ({rows, headCells, createRow, editDialog, refreshData, tittle, deleteDialog, addButton, showSuccess, showError}) => {
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [page, setPage] = React.useState(0);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [currentRow, setCurrentRow] = useState({});

    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false);


    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const closeEditDialog = () => {
        setIsEdit(false);
    }

    const closeDeleteDialog = () => {
        setIsDelete(false);
    }

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


    return (
        <div>
            {editDialog({
                currentRow,
                refreshData,
                isOpen: isEdit,
                closeDialog: closeEditDialog,
                showSuccess,
                showError
            })}
            {deleteDialog({currentRow, refreshData, isOpen: isDelete, closeDialog: closeDeleteDialog, showSuccess})}

            <Paper>
                <CustomTableToolbar tittle={tittle} count={rows?.length} addButton={addButton}/>
                <TableContainer>
                    <Table>
                        <CustomTableHead
                            cells={headCells}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={rows?.length}/>
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(row => createRow({row, setIsEdit, setIsDelete, setCurrentRow}))}
                            {emptyRows > 0 && (
                                <TableRow style={{height: 53 * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
}

export default CustomTable