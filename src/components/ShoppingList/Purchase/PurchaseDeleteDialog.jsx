import React from "react";
import {deleteCategory} from "../../../service/categoryService";
import CustomDeleteDialog from "../../CustomTable/CustomDeleteDialog";
import {getDeleteMessage, PURCHASE_DELETE_DIALOG_TITTLE} from "./purchaseConstants";

const PurchaseDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {

    return <CustomDeleteDialog refreshData={refreshData}
                               tittle={PURCHASE_DELETE_DIALOG_TITTLE}
                               closeDialog={closeDialog}
                               isOpen={isOpen}
                               currentRow={currentRow}
                               deleteMethod={deleteCategory}
                               message={getDeleteMessage(currentRow.name)}/>
}

export default PurchaseDeleteDialog
