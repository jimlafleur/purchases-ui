import React from "react";
import {deleteCategory} from "../../service/categoryService";
import {CATEGORY_DELETE_DIALOG_TITTLE, getDeleteMessage} from "./categoryConstants";
import CustomDeleteDialog from "../CustomTable/CustomDeleteDialog";

const CategoryDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog}) => {

    return (<CustomDeleteDialog refreshData={refreshData}
                                tittle={CATEGORY_DELETE_DIALOG_TITTLE}
                                closeDialog={closeDialog}
                                isOpen={isOpen}
                                currentRow={currentRow}
                                deleteMethod={deleteCategory}
                                message={getDeleteMessage(currentRow.name)}/>
    )
}

export default CategoryDeleteDialog
