import TableCell from "@material-ui/core/TableCell";
import React from "react";

const CategoryCells = row => {

    return (
        <>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.description}</TableCell>
        </>
    )
}

export default CategoryCells