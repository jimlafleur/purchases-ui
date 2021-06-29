import React from "react";
import GoodsList from "../Goods/GoodsList";


const EditList = ({match}) => {

    return (
        <GoodsList listId={match.params.id}/>
    )
}

export default EditList
