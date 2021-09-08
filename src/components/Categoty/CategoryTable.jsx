import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {CATEGORY_TITTLE, CategoryHeadCells} from "./constants";
import CategoryRow from "./CategoryRow";
import CategoryEditDialog from "./CategoryEditDialog";
import CategoryDeleteDialog from "./CategoryDeleteDialog";

const CategoryTable = ({rows, refreshData}) => {

    return <CustomTable headCells={CategoryHeadCells}
                        rows={rows}
                        createRow={CategoryRow}
                        editDialog={CategoryEditDialog}
                        refreshData={refreshData}
                        tittle={CATEGORY_TITTLE}
                        deleteDialog={CategoryDeleteDialog}/>
}

export default CategoryTable