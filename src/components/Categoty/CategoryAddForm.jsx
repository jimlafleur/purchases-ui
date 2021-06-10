import React, {useState} from "react";
import {postCategories} from "../../service/categoryService";

const CategoryAddForm = ({fetchCategories}) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const nameChanged = event => {
        setName(event.target.value);
    }

    const descriptionChanged = event => {
        setDescription(event.target.value);
    }

    const saveCategory = () => {
        const category = {name, description}
        console.log(category)
        postCategories(category, fetchCategories)
    }

    return (
        <div className="input-group mb-3">
            <input type="text" value={name} onChange={nameChanged} placeholder="Название"/>
            <input type="text" value={description} onChange={descriptionChanged} placeholder="Описание"/>
            <button type="submit" onClick={saveCategory}>
                Добавить категорию товара
            </button>
        </div>
    )
}

export default CategoryAddForm