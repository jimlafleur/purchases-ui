import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {CATEGORY_TITTLE, CategoryHeadCells} from "./categoryConstants";
import CategoryRow from "./CategoryRow";
import CategoryDeleteDialog from "./CategoryDeleteDialog";
import CategoryEditDialog from "./CategoryEditDialog";

const CategoryTable = ({rows, refreshData, showSuccess, showError}) => {

    return <CustomTable headCells={CategoryHeadCells}
                        rows={rows}
                        createRow={CategoryRow}
                        editDialog={CategoryEditDialog}
                        refreshData={refreshData}
                        tittle={CATEGORY_TITTLE}
                        showSuccess={showSuccess}
                        showError={showError}
                        deleteDialog={CategoryDeleteDialog}/>
}

export default CategoryTable