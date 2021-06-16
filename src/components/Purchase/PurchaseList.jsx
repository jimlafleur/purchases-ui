import React from "react";
import PurchaseRow from "./PurchaseRow";

const PurchaseList = ({purchases}) => {
    console.log(purchases)
    return (
        <table className="table">
            <thead>
            <tr>
                <th>Название</th>
                <th>Количество</th>
                <th>Стоимость</th>
                <th>Категория товара</th>
            </tr>
            </thead>
            <tbody>
            {purchases?.map(purchase => <PurchaseRow purchase={purchase}/>)}
            </tbody>
        </table>
    )
}

export default PurchaseList
