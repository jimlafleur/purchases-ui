import TableCell from "@material-ui/core/TableCell";
import React from "react";

const CategoryCells = row => {

    return (
        <>
            <TableCell width='40%'>{row.name}</TableCell>
            <TableCell>{row.description}</TableCell>
        </>
    )
}

export default CategoryCells