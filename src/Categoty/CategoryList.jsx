import React from "react";

const CategoryList = ({categories}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">Название</th>
                <th scope="col">Описание</th>
            </tr>
            </thead>
            <tbody>
            {categories.map(category => (
                <tr>
                    <td>{category.name}</td>
                    <td>{category.description}</td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default CategoryList