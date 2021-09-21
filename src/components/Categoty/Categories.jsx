import React, {useEffect, useState} from "react";
import CategoryAddForm from "./CategoryAddForm";
import {getCategories} from "../../service/categoryService";
import CategoryTable from "./CategoryTable";

const Categories = ({showSuccess, showError}) => {

    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)

    useEffect(fetchCategories, [])

    return (
        <div className="container-fluid">
            <CategoryAddForm fetchCategories={fetchCategories}
                             showSuccess={showSuccess}
                             showError={showError}/>

            <CategoryTable rows={categories}
                           refreshData={fetchCategories}
                           showSuccess={showSuccess}
                           showError={showError}/>
        </div>
    )
}

export default Categories
