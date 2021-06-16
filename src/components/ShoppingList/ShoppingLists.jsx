import React, {useEffect, useState} from "react";
import ShoppingListAddForm from "./ShoppingListAddForm";
import {getAllLists} from "../../service/shoppingListService";
import ShoppingListRow from "./ShoppingListRow";
import {getCategories} from "../../service/categoryService";

const ShoppingLists = () => {

    const [lists, setLists] = useState([])
    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)
    const fetchLists = () => getAllLists(setLists)

    useEffect(fetchLists, [])
    useEffect(fetchCategories, [])

    return (
        <div className="container-fluid">
            <ShoppingListAddForm fetchLists={fetchLists}/>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                    {lists.map(list => <ShoppingListRow list={list}
                                                        refreshLists={fetchLists}
                                                        categories={categories}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ShoppingLists
