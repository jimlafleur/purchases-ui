import React, {useEffect, useState} from "react";
import Input from "@material-ui/core/Input";
import {putPurchase} from "../../service/purchaseService";

const PurchaseRow = ({purchase, refreshList}) => {

    const [editingCoast, setEditingCoast] = useState(false)
    const [coast, setCoast] = useState(purchase.coast)

    const startEditCoast = () => {
        setEditingCoast(true)
    }

    const endEditCoast = () => {
        setEditingCoast(false)
    }

    const editCoast = event => {
        const newCoast = event.target.valueAsNumber
        if (isNaN(newCoast) || newCoast < 0) {
            setCoast(0)
        } else {
            setCoast(newCoast)
        }
    }

    useEffect(() => {
        const newPurchase = {id: purchase.purchaseId, count: purchase.count, coast: coast}
        putPurchase(newPurchase, refreshList)

    }, [coast])


    const onEnterDown = (event) => {
        if (event.charCode === 13) {
            endEditCoast()
        }
    }

    return (
        <tr>
            <td className="col-md-1">
                {purchase.name}
            </td>
            <td className="col-md-1">
                {purchase.count}
            </td>
            <td className="col-md-1" onClick={startEditCoast} onBlur={endEditCoast}>
                {editingCoast ?
                    <Input type="number" value={coast} onChange={editCoast} onKeyPress={onEnterDown}/> : `${coast} ₽`}
            </td>
            <td className="col-md-1">
                {purchase.categoryName}
            </td>
        </tr>
    )
}

export default PurchaseRow