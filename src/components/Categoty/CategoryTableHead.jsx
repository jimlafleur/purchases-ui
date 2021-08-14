import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {CategoryTableHeadPropTypes} from "./constants";
import React from "react";
import TableHeadCell from "./TableHeadCell";

const CategoryTableHead = ({cells, classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort}) => {


    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{'aria-label': 'select all desserts'}}
                    />
                </TableCell>
                {cells.map(cell => <TableHeadCell headCell={cell}
                                                  classes={classes}
                                                  order={order}
                                                  orderBy={orderBy}
                                                  onRequestSort={onRequestSort}/>)}
            </TableRow>
        </TableHead>
    );
}

CategoryTableHead.propTypes = CategoryTableHeadPropTypes

export default CategoryTableHead
