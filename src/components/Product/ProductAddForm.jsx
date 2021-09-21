import React, {useEffect, useState} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {postProduct} from "../../service/productService";
import {PRODUCT_ADDED, PRODUCT_ERROR, validateProduct} from "./productConstants";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import {useFormControlStyles} from "../CustomTable/constants";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const ProductAddForm = ({refreshProducts, categories, showSuccess, showError}) => {
    const classes = useFormControlStyles();

    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState(-1)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const categoryChanged = event => {
        setCategoryId(event.target.value);
    }

    useEffect(() => {
        setCategoryId(categories[0]?.id)
    }, [categories])

    const clearProductAddForm = () => {
        setName('')
        setCategoryId(categories[0]?.id)
    }

    const saveProduct = () => {
        const product = {name}
        const params = {categoryId}
        if (validateProduct(product, params)) {
            postProduct(product, refreshProducts, params)
            clearProductAddForm()
            showSuccess(PRODUCT_ADDED)
        } else {
            showError(PRODUCT_ERROR)
        }
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root}>
                <FormControl className={classes.formControl}>
                    <TextField value={name} onChange={nameChanged} label="Название"/>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="filled-age-native-simple">Категория товара</InputLabel>
                    <Select onChange={categoryChanged} value={categoryId}>
                        {categories?.map(category => <MenuItem value={category.id}>{category.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </form>
            <Tooltip title="Добавить продукт">
                <Fab color="primary" aria-label="add">
                    <AddIcon type="submit" onClick={saveProduct}/>
                </Fab>
            </Tooltip>
        </div>
    )
}

export default ProductAddForm