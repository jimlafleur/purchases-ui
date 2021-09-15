import TableCell from "@material-ui/core/TableCell";
import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import {baseClientURL} from "../../constants";

const ShoppingListCells = row => {

    return <TableCell align="left">
        <Tooltip title="Кликните по названию списка, чтобы открыть его">
            <a href={`${baseClientURL}lists/${row.id}`}>
                {row.name}
            </a>
        </Tooltip>
    </TableCell>
}

export default ShoppingListCells