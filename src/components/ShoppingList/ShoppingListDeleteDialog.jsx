import CustomDeleteDialog from "../CustomTable/CustomDeleteDialog";
import {getDeleteMessage, SHOPPING_LIST_DELETE_DIALOG_TITTLE, SHOPPING_LIST_REMOVED} from "./shoppingListConstants";
import {deleteList} from "../../service/shoppingListService";
import React from "react";

const ShoppingListDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess}) => {

    return <CustomDeleteDialog refreshData={refreshData}
                               tittle={SHOPPING_LIST_DELETE_DIALOG_TITTLE}
                               closeDialog={closeDialog}
                               isOpen={isOpen}
                               currentRow={currentRow}
                               deleteMethod={deleteList}
                               showSuccess={showSuccess}
                               message={getDeleteMessage(currentRow.name)}
                               deletedMessage={SHOPPING_LIST_REMOVED}/>
}

export default ShoppingListDeleteDialog
