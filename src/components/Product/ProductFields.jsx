import TextField from "@material-ui/core/TextField";
import React from "react";

const ProductFields = ({states, actions}) => {

    return (
        <>
            <TextField value={states?.name} onChange={actions?.nameChanged} label="Название"/>
            <TextField value={states?.description} onChange={actions?.descriptionChanged} label="Категория товара"/>
        </>)
}

export default ProductFields