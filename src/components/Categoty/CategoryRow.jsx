import React from "react";
import CustomRow from "../CustomTable/CustomRow";
import {CATEGORY_DELETE_DIALOG_TOOLTIP, CATEGORY_EDIT_DIALOG_TOOLTIP} from "./constants";
import CategoryCells from "./CategoryCells";

const CategoryRow = ({row, setIsEdit, setIsDelete, setCurrentRow}) => {

    return (
        <CustomRow cells={CategoryCells}
                   deleteTooltip={CATEGORY_DELETE_DIALOG_TOOLTIP}
                   editTooltip={CATEGORY_EDIT_DIALOG_TOOLTIP}
                   row={row}
                   setCurrentRow={setCurrentRow}
                   setIsDelete={setIsDelete}
                   setIsEdit={setIsEdit}/>
    )
}

export default CategoryRow