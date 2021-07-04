import React, {useState} from "react";
import {deleteCategory, editCategory} from "../../service/categoryService";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Fab from "@material-ui/core/Fab";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";

const CategoryRow = ({category, refreshCategories}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [newName, setNewName] = useState(category.name)
    const [newDescription, setNewDescription] = useState(category.description)

    const edit = () => {
        setIsEdit(true)
    }

    const save = () => {
        editCategory({name: newName, description: newDescription, id: category.id}, refreshCategories)
        setIsEdit(false)
    }

    const remove = () => {
        deleteCategory(category.id, refreshCategories)
    }

    const nameChanged = event => {
        setNewName(event.target.value);
    }

    const descriptionChanged = event => {
        setNewDescription(event.target.value);
    }

    return (
        <tr>
            <td hidden={isEdit} className="col-md-1">
                {category.name}
            </td>
            <td hidden={!isEdit} className="col-md-1">
                <input type="text" value={newName} onChange={nameChanged} placeholder="Название"/>
            </td>
            <td hidden={isEdit}>
                {category.description}
            </td>
            <td hidden={!isEdit}>
                <input type="text" value={newDescription} onChange={descriptionChanged} placeholder="Описание"/>
            </td>
            <td hidden={isEdit} className="col-md-1">
                <Fab color="secondary" aria-label="edit">
                    <EditIcon onClick={edit}/>
                </Fab>
            </td>
            <td hidden={!isEdit} className="col-md-1">
                <Fab color="secondary" aria-label="save">
                    <SaveIcon onClick={save}/>
                </Fab>
            </td>
            <td className="col-md-1" hidden>
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={remove}/>
                </IconButton>
            </td>
        </tr>
    )
}

export default CategoryRow