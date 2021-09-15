import React, {useEffect} from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {postProduct} from "../../service/productService";
import ProductFields from "./ProductFields";
import ProductStates from "./ProductStates";
import {clearProductAddForm, validateProduct} from "./productConstants";

const ProductAddForm = ({refreshProducts, categories}) => {

    const {states, actions, setters} = ProductStates()

    useEffect(() => {
        setters.setCategoryId(categories[0]?.id)
    }, [categories])

    const saveProduct = () => {
        const product = {name: states.name}
        const params = {categoryId: states.categoryId}
        if (validateProduct(product, params)) {
            postProduct(product, refreshProducts, params)
            clearProductAddForm(setters)
        }
    }

    return (
        <div className="input-group mb-3">
            <ProductFields states={states} actions={actions} categories={categories}/>
            <Tooltip title="Добавить продукт">
                <Fab color="primary" aria-label="add">
                    <AddIcon type="submit" onClick={saveProduct}/>
                </Fab>
            </Tooltip>
        </div>
    )
}

export default ProductAddForm