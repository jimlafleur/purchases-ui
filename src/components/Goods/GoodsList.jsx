import React, {useEffect, useState} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import {classes} from "istanbul-lib-coverage";
import TableBody from "@material-ui/core/TableBody";
import GoodsRow from "./GoodsRow";
import {getGoods} from "../../service/goodsService";

const GoodsList = ({listId}) => {

    const [goods, setGoods] = useState([])

    const fetchGoods = () => getGoods(listId, setGoods)

    useEffect(fetchGoods, [listId])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableBody>
                    {goods.map(product => <GoodsRow product={product} listId={listId} refreshList={fetchGoods}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GoodsList
