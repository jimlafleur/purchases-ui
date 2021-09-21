import React, {useEffect, useState} from 'react';
import {getAllLists} from "../../service/shoppingListService";
import ShoppingListAddForm from "./ShoppingListAddForm";
import ShoppingListTable from "./ShoppingListTable";

const ShoppingLists = ({showSuccess, showError}) => {

    const [lists, setLists] = useState([])

    const fetchLists = () => getAllLists(setLists)

    useEffect(fetchLists, [])

    return <div className="container-fluid">
        <ShoppingListAddForm fetchLists={fetchLists} showError={showError} showSuccess={showSuccess}/>
        <ShoppingListTable refreshData={fetchLists} rows={lists} showError={showError} showSuccess={showSuccess}/>
    </div>

}

export default ShoppingLists
