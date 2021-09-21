import React from "react";
import {getDeleteMessage, PRODUCT_DELETE_DIALOG_TITTLE, PRODUCT_REMOVED} from "./productConstants";
import {deleteProduct} from "../../service/productService";
import CustomDeleteDialog from "../CustomTable/CustomDeleteDialog";

const ProductDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess}) => {

    return (<CustomDeleteDialog refreshData={refreshData}
                                tittle={PRODUCT_DELETE_DIALOG_TITTLE}
                                closeDialog={closeDialog}
                                isOpen={isOpen}
                                currentRow={currentRow}
                                deleteMethod={deleteProduct}
                                showSuccess={showSuccess}
                                deletedMessage={PRODUCT_REMOVED}
                                message={getDeleteMessage(currentRow.name)}/>
    )
}

export default ProductDeleteDialog
