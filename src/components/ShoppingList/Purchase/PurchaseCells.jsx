import TableCell from "@material-ui/core/TableCell";
import React from "react";

const PurchaseCells = row => {

    return <>
        <TableCell>{row.name}</TableCell>
        <TableCell>{new Intl.NumberFormat('ru-RU').format(row.count)}</TableCell>
        <TableCell>{new Intl.NumberFormat('ru-RU').format(row.coast)} ₽</TableCell>
        <TableCell>{row.categoryName}</TableCell>
    </>
}

export default PurchaseCells