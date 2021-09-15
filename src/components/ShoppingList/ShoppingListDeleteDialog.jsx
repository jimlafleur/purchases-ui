import CustomDeleteDialog from "../CustomTable/CustomDeleteDialog";
import {getDeleteMessage, SHOPPING_LIST_DELETE_DIALOG_TITTLE} from "./shoppingListConstants";
import {deleteList} from "../../service/shoppingListService";
import React from "react";

const ShoppingListDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {

    return <CustomDeleteDialog refreshData={refreshData}
                               tittle={SHOPPING_LIST_DELETE_DIALOG_TITTLE}
                               closeDialog={closeDialog}
                               isOpen={isOpen}
                               currentRow={currentRow}
                               deleteMethod={deleteList}
                               message={getDeleteMessage(currentRow.name)}/>
}

export default ShoppingListDeleteDialog
