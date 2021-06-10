import React from "react";
import CategoryRow from "./CategoryRow";

const CategoryList = ({categories, refreshCategories}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => <CategoryRow category={category} refreshCategories={refreshCategories}/>)}
            </tbody>
        </table>
    )
}

export default CategoryList