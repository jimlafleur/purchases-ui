import React from "react";
import CustomRow from "../CustomTable/CustomRow";
import {SHOPPING_LIST_DELETE_DIALOG_TOOLTIP, SHOPPING_LIST_EDIT_DIALOG_TOOLTIP} from "./shoppingListConstants";
import ShoppingListCells from "./ShoppingListCells";

const ShoppingListRow = ({row, setIsEdit, setIsDelete, setCurrentRow}) => {

    return (
        <CustomRow cells={ShoppingListCells}
                   deleteTooltip={SHOPPING_LIST_DELETE_DIALOG_TOOLTIP}
                   editTooltip={SHOPPING_LIST_EDIT_DIALOG_TOOLTIP}
                   row={row}
                   setCurrentRow={setCurrentRow}
                   setIsDelete={setIsDelete}
                   setIsEdit={setIsEdit}/>
    )
}

export default ShoppingListRow