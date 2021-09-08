import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {PRODUCT_TITTLE, ProductHeadCells} from "./constants";
import ProductRow from "./ProductRow";
import ProductEditDialog from "./ProductEditDialog";
import ProductDeleteDialog from "./ProductDeleteDialog";

const ProductTable = ({rows, refreshData}) => {

    return <CustomTable headCells={ProductHeadCells}
                        rows={rows}
                        createRow={ProductRow}
                        editDialog={ProductEditDialog}
                        refreshData={refreshData}
                        tittle={PRODUCT_TITTLE}
                        deleteDialog={ProductDeleteDialog}/>
}

export default ProductTable