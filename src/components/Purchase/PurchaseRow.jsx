import React from "react";

const PurchaseRow = ({purchase, refreshList}) => {

    return (
        <tr>
            <td className="col-md-1">
                {purchase.name}
            </td>
            <td className="col-md-1">
                {purchase.count}
            </td>
            <td className="col-md-1">
                {`${purchase.coast} ₽`}
            </td>
            <td className="col-md-1">
                {purchase.categoryName}
            </td>
        </tr>
    )
}

export default PurchaseRow