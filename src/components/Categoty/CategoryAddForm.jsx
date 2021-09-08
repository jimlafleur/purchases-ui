import React, {useState} from "react";
import {postCategory} from "../../service/categoryService";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {validateCategory} from "./constants";
import CategoryFields from "./CategoryFields";
import {useAddFormStyles} from "../CustomTable/constants";

const CategoryAddForm = ({fetchCategories}) => {

    const classes = useAddFormStyles();

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
        if (validateCategory(category)) {
            postCategory(category, fetchCategories)
            setName('')
            setDescription('')
        }
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root} noValidate autoComplete="off">
                <CategoryFields states={{name, description}} actions={{nameChanged, descriptionChanged}}/>
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