import TextField from "@material-ui/core/TextField";
import React from "react";

const CategoryFields = ({states, actions}) => {

    return (
        <>
            <TextField value={states?.name} onChange={actions?.nameChanged} label="Название"/>
            <TextField value={states?.description} onChange={actions?.descriptionChanged} label="Описание"/>
        </>)
}

export default CategoryFields