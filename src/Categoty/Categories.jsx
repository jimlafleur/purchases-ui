import React, {useEffect, useState} from "react";
import CategoryList from "./CategoryList";
import CategoryAddForm from "./CategoryAddForm";
import {getCategories} from "../service/categoryService";

const Categories = () => {

    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)

    useEffect(fetchCategories, [])

    return (
        <div className="container-fluid">
            <CategoryAddForm fetchCategories={fetchCategories}/>
            <CategoryList categories={categories} refreshCategories={fetchCategories}/>
        </div>
    )
}

export default Categories
