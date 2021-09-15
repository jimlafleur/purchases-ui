import React, {useEffect, useState} from 'react';
import {getAllLists} from "../../service/shoppingListService";
import ShoppingListAddForm from "./ShoppingListAddForm";
import ShoppingListTable from "./ShoppingListTable";

const ShoppingLists = () => {

    const [lists, setLists] = useState([])

    const fetchLists = () => getAllLists(setLists)

    useEffect(fetchLists, [])

    return <div className="container-fluid">
        <ShoppingListAddForm fetchLists={fetchLists}/>
        <ShoppingListTable refreshData={fetchLists} rows={lists}/>
    </div>

}

export default ShoppingLists
