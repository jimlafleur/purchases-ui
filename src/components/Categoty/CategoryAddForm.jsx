import React, {useState} from "react";
import {postCategories} from "../../service/categoryService";
import TextField from "@material-ui/core/TextField";
import {classes} from "istanbul-lib-coverage";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {isBlank} from "../../utils/utils";

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
        if (!isBlank(name) && !isBlank(description)) {
            postCategories(category, fetchCategories)
        }
        setName('')
        setDescription('')
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root} noValidate autoComplete="off">
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