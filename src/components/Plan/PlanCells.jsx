import TableCell from "@material-ui/core/TableCell";
import React from "react";

const PlanCells = row => {

    return (
        <>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.shoppingListName}</TableCell>
            <TableCell>{row.nearestDate}</TableCell>
            <TableCell>{row.planType}</TableCell>
        </>
    )
}

export default PlanCells