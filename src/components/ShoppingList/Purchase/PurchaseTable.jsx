import React from 'react';
import CustomTable from "../../CustomTable/CustomTable";
import PurchaseRow from "./PurchaseRow";
import {PURCHASE_TITTLE, PurchaseHeadCells} from "./purchaseConstants";
import PurchaseDeleteDialog from "./PurchaseDeleteDialog";
import PurchaseEditDialog from "./PurchaseEditDialog";

const PurchaseTable = ({rows, refreshData, addButton, showSuccess}) => {

    return <CustomTable headCells={PurchaseHeadCells}
                        rows={rows}
                        createRow={PurchaseRow}
                        editDialog={PurchaseEditDialog}
                        refreshData={refreshData}
                        tittle={PURCHASE_TITTLE}
                        deleteDialog={PurchaseDeleteDialog}
                        showSuccess={showSuccess}
                        addButton={addButton}/>
}

export default PurchaseTable