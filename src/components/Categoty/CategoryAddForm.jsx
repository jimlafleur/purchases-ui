import React, {useState} from "react";
import {postCategory} from "../../service/categoryService";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {CATEGORY_ADDED, CATEGORY_ERROR, validateCategory} from "./categoryConstants";
import TextField from "@material-ui/core/TextField";
import {useAddFormStyles} from "../CustomTable/constants";

const CategoryAddForm = ({fetchCategories, showSuccess, showError}) => {

    const classes = useAddFormStyles();

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const nameChanged = event => {
        setName(event.target.value);
    }

    const descriptionChanged = event => {
        setDescription(event.target.value);
    }

    const clearCategoryAddForm = () => {
        setName('')
        setDescription('')
    }

    const saveCategory = () => {
        const category = {name, description}
        if (validateCategory(category)) {
            postCategory(category, fetchCategories)
            clearCategoryAddForm()
            showSuccess(CATEGORY_ADDED)
        } else {
            showError(CATEGORY_ERROR)
        }
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root}>
                <TextField value={name} onChange={nameChanged} label="Название"/>
                <TextField value={description} onChange={descriptionChanged} label="Описание"/>
            </form>
            <Tooltip title="Добавить категорию товара">
                <Fab color="primary" aria-label="add">
                    <AddIcon type="submit" onClick={saveCategory}/>
                </Fab>
            </Tooltip>
        </div>
    )
}

export default CategoryAddForm