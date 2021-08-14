import React, {useEffect, useState} from 'react';
import {getAllLists} from "../../service/shoppingListService";
import {getCategories} from "../../service/categoryService";
import TableContainer from "@material-ui/core/TableContainer";
import {Paper} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import ShoppingListRow from "./ShoppingListRow";
import ShoppingListAddForm from "./ShoppingListAddForm";

const ShoppingLists = () => {

    const [lists, setLists] = useState([])
    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)
    const fetchLists = () => getAllLists(setLists)

    useEffect(fetchLists, [])
    useEffect(fetchCategories, [])

    return (
        <div>
            <ShoppingListAddForm fetchLists={fetchLists}/>
            <TableContainer component={Paper}>
                <Table size="small">
                    <TableBody>
                        {lists.map(list => <ShoppingListRow list={list}
                                                            refreshLists={fetchLists}
                                                            categories={categories}/>)}

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default ShoppingLists
