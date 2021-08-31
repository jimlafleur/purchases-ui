import React, {useEffect, useState} from "react";
import CategoryAddForm from "./CategoryAddForm";
import {getCategories} from "../../service/categoryService";
import CategoryTable from "./CategoryTable";

const Categories = () => {

    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)

    useEffect(fetchCategories, [])

    return (
        <div className="container-fluid">
            <CategoryAddForm fetchCategories={fetchCategories}/>
            <CategoryTable rows={categories} refreshData={fetchCategories}/>
        </div>
    )
}

export default Categories
