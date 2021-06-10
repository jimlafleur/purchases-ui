import React, {useState} from "react";
import {deleteCategory, editCategory} from "../../service/categoryService";

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
                <button onClick={edit}>Редактировать</button>
            </td>
            <td hidden={!isEdit} className="col-md-1">
                <button onClick={save}>Сохранить</button>
            </td>
            <td className="col-md-1">
                <button onClick={remove}>Удалить</button>
            </td>
        </tr>
    )
}

export default CategoryRow