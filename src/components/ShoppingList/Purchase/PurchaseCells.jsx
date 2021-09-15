import TableCell from "@material-ui/core/TableCell";
import React from "react";

const PurchaseCells = row => {

    return <>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.count}</TableCell>
        <TableCell>{row.coast}</TableCell>
        <TableCell>{row.categoryName}</TableCell>
    </>
}

export default PurchaseCells