import React from 'react';
import CustomTable from "../CustomTable/CustomTable";
import {CATEGORY_TITTLE, CategoryHeadCells} from "./constants";
import CategoryTableRow from "./CategoryTableRow";
import EditCategoryDialog from "./EditCategoryDialog";
import DeleteCategoryDialog from "./DeleteCategoryDialog";

const CategoryTable = ({rows, refreshData}) => {

    return <CustomTable headCells={CategoryHeadCells}
                        rows={rows}
                        createRow={CategoryTableRow}
                        editDialog={EditCategoryDialog}
                        refreshData={refreshData}
                        tittle={CATEGORY_TITTLE}
                        deleteDialog={DeleteCategoryDialog}/>
}

export default CategoryTable