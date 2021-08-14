import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {CategoryHeadCells, useCategoryTableStyles} from "./constants";
import CategoryTableToolbar from "./CategoryTableToolbar";
import CategoryTableHead from "./CategoryTableHead";
import {getComparator, stableSort} from "../../utils/tableUtils";
import CategoryTableRow from "./CategoryTableRow";

const CategoryTable = ({rows}) => {
    const classes = useCategoryTableStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [selected, setSelected] = useState([]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <CategoryTableToolbar numSelected={selected.length}/>
                <TableContainer>
                    <Table
                        // className={classes.table}
                        // aria-labelledby="tableTitle"
                        // size={'medium'}
                        // aria-label="enhanced table"
                    >
                        <CategoryTableHead
                            cells={CategoryHeadCells}
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                                .map((row, index) => <CategoryTableRow row={row}
                                                                       index={index}
                                                                       selected={selected}
                                                                       handleClick={handleClick}/>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default CategoryTable