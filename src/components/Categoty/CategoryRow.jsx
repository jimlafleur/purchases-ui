import React, {useState} from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteCategoryDialog from "./DeleteCategoryDialog";
import Tooltip from "@material-ui/core/Tooltip";
import EditCategoryDialog from "./EditCategoryDialog";

const CategoryRow = ({category, refreshCategories}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [isDelete, setIsDelete] = useState(false);

    const openDeleteDialog = () => {
        setIsDelete(true);
    }

    const closeDeleteDialog = () => {
        setIsDelete(false);
    }

    const openEditDialog = () => {
        setIsEdit(true);
    }

    const closeEditDialog = () => {
        setIsEdit(false);
    }


    return (
        <div>
            <DeleteCategoryDialog category={category}
                                  refreshCategories={refreshCategories}
                                  isOpen={isDelete}
                                  closeDialog={closeDeleteDialog}/>
            <EditCategoryDialog category={category}
                                refreshCategories={refreshCategories}
                                isOpen={isEdit}
                                closeDialog={closeEditDialog}/>
            <tr>
                <td>
                    {category.name}
                </td>
                <td>
                    {category.description}
                </td>

                <td>
                    <Tooltip title="Редактировать категорию товара">
                        <Fab color="secondary" aria-label="edit">
                            <EditIcon onClick={openEditDialog}/>
                        </Fab>
                    </Tooltip>

                </td>
                <td>
                    <Tooltip title="Удалить категорию товара">
                        <IconButton aria-label="delete">
                            <DeleteIcon onClick={openDeleteDialog}/>
                        </IconButton>
                    </Tooltip>
                </td>
            </tr>
        </div>
    )
}

export default CategoryRow