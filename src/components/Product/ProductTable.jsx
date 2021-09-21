import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {PRODUCT_TITTLE, ProductHeadCells} from "./productConstants";
import ProductRow from "./ProductRow";
import ProductDeleteDialog from "./ProductDeleteDialog";
import ProductEditDialog from "./ProductEditDialog";

const ProductTable = ({rows, refreshData, showSuccess, showError}) => {

    return <CustomTable headCells={ProductHeadCells}
                        rows={rows}
                        createRow={ProductRow}
                        editDialog={ProductEditDialog}
                        refreshData={refreshData}
                        tittle={PRODUCT_TITTLE}
                        showError={showError}
                        showSuccess={showSuccess}
                        deleteDialog={ProductDeleteDialog}/>
}

export default ProductTable