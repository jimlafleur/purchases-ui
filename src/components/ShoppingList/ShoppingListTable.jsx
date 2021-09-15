import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {SHOPPING_LIST_TITTLE, ShoppingListHeadCells} from "./shoppingListConstants";
import ShoppingListEditDialog from "./ShoppingListEditDialog";
import ShoppingListDeleteDialog from "./ShoppingListDeleteDialog";
import ShoppingListRow from "./ShoppingListRow";

const ShoppingListTable = ({rows, refreshData}) => {

    return <CustomTable headCells={ShoppingListHeadCells}
                        rows={rows}
                        createRow={ShoppingListRow}
                        editDialog={ShoppingListEditDialog}
                        refreshData={refreshData}
                        tittle={SHOPPING_LIST_TITTLE}
                        deleteDialog={ShoppingListDeleteDialog}/>
}

export default ShoppingListTable