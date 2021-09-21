import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {SHOPPING_LIST_TITTLE, ShoppingListHeadCells} from "./shoppingListConstants";
import ShoppingListEditDialog from "./ShoppingListEditDialog";
import ShoppingListDeleteDialog from "./ShoppingListDeleteDialog";
import ShoppingListRow from "./ShoppingListRow";

const ShoppingListTable = ({rows, refreshData, showSuccess, showError}) => {

    return <CustomTable headCells={ShoppingListHeadCells}
                        rows={rows}
                        createRow={ShoppingListRow}
                        editDialog={ShoppingListEditDialog}
                        refreshData={refreshData}
                        tittle={SHOPPING_LIST_TITTLE}
                        showSuccess={showSuccess}
                        showError={showError}
                        deleteDialog={ShoppingListDeleteDialog}/>
}

export default ShoppingListTable