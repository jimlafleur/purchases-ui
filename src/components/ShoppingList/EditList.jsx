import React from "react";
import ProductList from "../Product/ProductList";


const EditList = ({match}) => {

    return (
        <ProductList listId={match.params.id}/>
    )
}

export default EditList
