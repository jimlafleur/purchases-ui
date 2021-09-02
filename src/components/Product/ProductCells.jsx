import TableCell from "@material-ui/core/TableCell";
import React from "react";

const ProductCells = row => {

    return (
        <>
            <TableCell width='40%'>{row.name}</TableCell>
            <TableCell>{row.categoryName}</TableCell>
        </>
    )
}

export default ProductCells