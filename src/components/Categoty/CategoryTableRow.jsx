import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import React from "react";


const CategoryTableRow = ({row, index, selected, handleClick}) => {

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const isItemSelected = isSelected(row.name);

    const labelId = `enhanced-table-checkbox-${index}`;

    return (
        <TableRow
            hover
            onClick={(event) => handleClick(event, row.name)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            key={row.name}
            selected={isItemSelected}
        >
            <TableCell padding="checkbox">
                <Checkbox
                    checked={isItemSelected}
                    inputProps={{'aria-labelledby': labelId}}
                />
            </TableCell>
            <TableCell>
                {row.name}
            </TableCell>
            <TableCell>{row.description}</TableCell>
        </TableRow>
    );
}

export default CategoryTableRow