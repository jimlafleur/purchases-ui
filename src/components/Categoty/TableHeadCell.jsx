import TableCell from "@material-ui/core/TableCell";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import React from "react";

const TableHeadCell = ({headCell, order, orderBy, classes, onRequestSort}) => {

    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
        >
            <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
            >
                {headCell.label}
                {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
                ) : null}
            </TableSortLabel>
        </TableCell>
    )
}

export default TableHeadCell
