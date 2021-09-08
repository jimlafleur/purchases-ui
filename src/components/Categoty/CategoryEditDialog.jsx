import React, {useEffect, useState} from "react";
import CustomEditDialog from "../CustomTable/CustomEditDialog";
import {editCategory} from "../../service/categoryService";
import CategoryFields from "./CategoryFields";
import {CATEGORY_EDIT_DIALOG_TITTLE, CATEGORY_SAVE_TOOLTIP, validateCategory} from "./constants";

const CategoryEditDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {
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

    const resetForm = () => {
        setName(currentRow.name)
        setDescription(currentRow.description)
    }

    return (
        <CustomEditDialog isOpen={isOpen}
                          closeDialog={closeDialog}
                          tittle={CATEGORY_EDIT_DIALOG_TITTLE}
                          refreshData={refreshData}
                          fields={CategoryFields}
                          getObject={getObject}
                          saveMethod={editCategory}
                          saveTooltip={CATEGORY_SAVE_TOOLTIP}
                          actions={{nameChanged, descriptionChanged}}
                          states={{name, description}}
                          validate={validateCategory}
                          resetForm={resetForm}
        />
    )
}

export default CategoryEditDialog
