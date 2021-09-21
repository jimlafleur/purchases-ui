import React from "react";
import {deleteCategory} from "../../service/categoryService";
import {CATEGORY_DELETE_DIALOG_TITTLE, CATEGORY_REMOVED, getDeleteMessage} from "./categoryConstants";
import CustomDeleteDialog from "../CustomTable/CustomDeleteDialog";

const CategoryDeleteDialog = ({currentRow, refreshData, isOpen, closeDialog, showSuccess}) => {

    return (<CustomDeleteDialog refreshData={refreshData}
                                tittle={CATEGORY_DELETE_DIALOG_TITTLE}
                                closeDialog={closeDialog}
                                isOpen={isOpen}
                                currentRow={currentRow}
                                deleteMethod={deleteCategory}
                                showSuccess={showSuccess}
                                deletedMessage={CATEGORY_REMOVED}
                                message={getDeleteMessage(currentRow.name)}/>
    )
}

export default CategoryDeleteDialog
