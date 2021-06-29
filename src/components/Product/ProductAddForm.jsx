import React, {useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import {classes} from "istanbul-lib-coverage";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {postProduct} from "../../service/productService";
import NativeSelect from "@material-ui/core/NativeSelect";

const ProductAddForm = ({refreshProducts, categories}) => {

    const [name, setName] = useState('')
    const [categoryId, setCategoryId] = useState(categories[0]?.id)

    const nameChanged = event => {
        setName(event.target.value);
    }

    const categoryChanged = event => {
        setCategoryId(event.target.value);
    }

    useEffect(()=>{setCategoryId(categories[0]?.id)},[categories])

    const saveProduct = () => {
        const product = {name}
        const params = {categoryId}

        postProduct(product, refreshProducts, params)
    }

    return (
        <div className="input-group mb-3">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField value={name} onChange={nameChanged} label="Название"/>
                <NativeSelect onChange={categoryChanged}>
                    {categories.map(category => <option value={category.id}>{category.name}</option>)}
                </NativeSelect>
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