import React, {useEffect, useState} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import {classes} from "istanbul-lib-coverage";
import TableBody from "@material-ui/core/TableBody";
import GoodsRow from "./GoodsRow";
import {getGoods} from "../../../../service/goodsService";
import TextField from "@material-ui/core/TextField";

const GoodsList = ({listId}) => {

    const [goods, setGoods] = useState([])
    const [nameForSearch, setNameForSearch] = useState('')

    const fetchGoods = () => getGoods(listId, setGoods, nameForSearch)

    useEffect(fetchGoods, [listId, nameForSearch])

    const nameChanged = event => {
        setNameForSearch(event.target.value);
    }

    return (
        <div>
            <TextField id="standard-basic" label="Поиск товара" value={nameForSearch}
                       onChange={nameChanged}/>

            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableBody>
                        {goods.map(product => <GoodsRow product={product} listId={listId} refreshList={fetchGoods}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default GoodsList
