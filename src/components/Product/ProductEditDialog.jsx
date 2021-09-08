import React, {useEffect, useState} from "react";
import CustomEditDialog from "../CustomTable/CustomEditDialog";
import {PRODUCT_EDIT_DIALOG_TITTLE, PRODUCT_SAVE_TOOLTIP} from "./constants";
import {editProduct} from "../../service/productService";
import ProductFields from "./ProductFields";

const ProductEditDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {
    const [name, setName] = useState(currentRow.name)
    const [description, setDescription] = useState(currentRow.description)

    useEffect(() => {
        setName(currentRow.name)
        setDescription(currentRow.description)
    }, [currentRow])


    const nameChanged = event => {
        setName(event.target.value);
    }

    const descriptionChanged = event => {
        setDescription(event.target.value);
    }

    const getObject = () => {
        return {name, description, id: currentRow.id}
    }

    return (
        <CustomEditDialog currentRow={currentRow}
                          isOpen={isOpen}
                          closeDialog={closeDialog}
                          tittle={PRODUCT_EDIT_DIALOG_TITTLE}
                          refreshData={refreshData}
                          fields={ProductFields}
                          getObject={getObject}
                          saveMethod={editProduct}
                          saveTooltip={PRODUCT_SAVE_TOOLTIP}
                          actions={{nameChanged, descriptionChanged}}
                          states={{name, description}}
        />
    )
}

export default ProductEditDialog
