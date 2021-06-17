import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {deletePurchases} from "../../service/purchaseService";

const PurchaseRow = ({purchase, refreshList}) => {

    const remove = () => {
        deletePurchases(purchase.id, refreshList)
    }

    return (
        <tr>
            <td className="col-md-1">
                {purchase?.name}
            </td>
            <td className="col-md-1">
                {purchase?.count}
            </td>
            <td className="col-md-1">
                {`${purchase?.coast} ₽`}
            </td>
            <td className="col-md-1">
                {purchase?.category?.name}
            </td>
            <td className="col-md-1">
                <IconButton aria-label="delete">
                    <DeleteIcon onClick={remove}/>
                </IconButton>
            </td>
        </tr>
    )
}

export default PurchaseRow