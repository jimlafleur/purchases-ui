import React from "react";
import CustomRow from "../../CustomTable/CustomRow";
import PurchaseCells from "./PurchaseCells";
import {PURCHASE_DELETE_DIALOG_TOOLTIP, PURCHASE_EDIT_DIALOG_TOOLTIP} from "./purchaseConstants";

const PurchaseRow = ({row, setIsEdit, setIsDelete, setCurrentRow}) => {

    return <CustomRow cells={PurchaseCells}
                      row={row}
                      setCurrentRow={setCurrentRow}
                      setIsDelete={setIsDelete}
                      setIsEdit={setIsEdit}
                      editTooltip={PURCHASE_EDIT_DIALOG_TOOLTIP}
                      deleteTooltip={PURCHASE_DELETE_DIALOG_TOOLTIP}/>
}

export default PurchaseRow