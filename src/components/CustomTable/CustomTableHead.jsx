import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import TableHeadCell from "./TableHeadCell";
import PropTypes from "prop-types";

const CustomTableHead = ({cells, order, orderBy, onRequestSort}) => {

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                </TableCell>
                {cells.map(cell => <TableHeadCell headCell={cell}
                                                  order={order}
                                                  orderBy={orderBy}
                                                  onRequestSort={onRequestSort}/>)}
                <TableCell padding="checkbox"/>
                <TableCell padding="checkbox"/>
            </TableRow>
        </TableHead>
    );
}

export default CustomTableHead

CustomTableHead.propTypes = {
    onRequestSort: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
};