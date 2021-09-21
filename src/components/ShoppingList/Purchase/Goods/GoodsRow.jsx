import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {deletePurchase, postPurchase, putPurchase} from "../../../../service/purchaseService";
import DeleteIcon from "@material-ui/icons/Delete";
import RemoveIcon from "@material-ui/icons/Remove";

const GoodsRow = ({product, listId, refreshList}) => {

    const addPurchase = () => {
        const purchase = {count: 1, coast: 0}
        const params = {productId: product.productId, listId}
        postPurchase(purchase, refreshList, params)
    }

    const increase = () => {
        const purchase = {id: product.purchaseId, count: product.count + 1, coast: product.coast}
        putPurchase(purchase, refreshList)
    }

    const decrease = () => {
        const purchase = {id: product.purchaseId, count: product.count - 1, coast: product.coast}
        putPurchase(purchase, refreshList)
    }

    const removePurchase = () => {
        deletePurchase(product.purchaseId, refreshList)
    }

    return (
        <TableRow key={product.name}>
            <TableCell align="left" width="20">
                {product.count > 0 ?
                    <Fab color="primary" aria-label="add" size="small">
                        <AddIcon type="submit" onClick={increase}/>
                    </Fab>
                    :
                    <Fab color="default" aria-label="add" size="small">
                        <AddIcon type="submit" onClick={addPurchase}/>
                    </Fab>
                }
            </TableCell>
            <TableCell align="left">{product.name}</TableCell>
            <TableCell align="right">{product.count > 0 ? product.count : ''}</TableCell>
            <TableCell align="left" width="20" hidden={product.count < 1}>
                <Fab color="secondary" size="small">
                    {product.count > 1
                        ? <RemoveIcon type="submit" onClick={decrease}/>
                        : <DeleteIcon onClick={removePurchase}/>}
                </Fab>
            </TableCell>
        </TableRow>
    )
}

export default GoodsRow