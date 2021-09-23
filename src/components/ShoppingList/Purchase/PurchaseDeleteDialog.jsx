import React from "react";
import CustomDeleteDialog from "../../CustomTable/CustomDeleteDialog";
import {getDeleteMessage, PURCHASE_DELETE_DIALOG_TITTLE, PURCHASE_REMOVED} from "./purchaseConstants";
import {deletePurchase} from "../../../service/purchaseService";

const PurchaseDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess}) => {

    return <CustomDeleteDialog refreshData={refreshData}
                               tittle={PURCHASE_DELETE_DIALOG_TITTLE}
                               closeDialog={closeDialog}
                               isOpen={isOpen}
                               currentRow={currentRow}
                               deleteMethod={deletePurchase}
                               showSuccess={showSuccess}
                               deletedMessage={PURCHASE_REMOVED}
                               message={getDeleteMessage(currentRow.name)}/>
}

export default PurchaseDeleteDialog
