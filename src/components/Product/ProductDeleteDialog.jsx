import React from "react";
import {getDeleteMessage, PRODUCT_DELETE_DIALOG_TITTLE} from "./productConstants";
import {deleteProduct} from "../../service/productService";
import CustomDeleteDialog from "../CustomTable/CustomDeleteDialog";

const ProductDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {

    return (<CustomDeleteDialog refreshData={refreshData}
                                tittle={PRODUCT_DELETE_DIALOG_TITTLE}
                                closeDialog={closeDialog}
                                isOpen={isOpen}
                                currentRow={currentRow}
                                deleteMethod={deleteProduct}
                                message={getDeleteMessage(currentRow.name)}/>
    )
}

export default ProductDeleteDialog
