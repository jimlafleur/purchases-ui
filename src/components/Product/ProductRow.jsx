import React from "react";
import CustomRow from "../CustomTable/CustomRow";
import ProductCells from "./ProductCells";
import {PRODUCT_DELETE_DIALOG_TOOLTIP, PRODUCT_EDIT_DIALOG_TOOLTIP} from "./constants";

const ProductRow = ({row, setIsEdit, setIsDelete, setCurrentRow}) => {

    return (
        <CustomRow cells={ProductCells}
                   deleteTooltip={PRODUCT_DELETE_DIALOG_TOOLTIP}
                   editTooltip={PRODUCT_EDIT_DIALOG_TOOLTIP}
                   row={row}
                   setCurrentRow={setCurrentRow}
                   setIsDelete={setIsDelete}
                   setIsEdit={setIsEdit}/>
    )
}

export default ProductRow