import React, {useEffect, useState} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import GoodsRow from "./GoodsRow";
import {getGoods} from "../../../../service/goodsService";
import TextField from "@material-ui/core/TextField";
import Toolbar from "@material-ui/core/Toolbar";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import {baseClientURL} from "../../../../constants";
import {ArrowBack} from "@material-ui/icons";
import {useToolbarStyles} from "../../../CustomTable/constants";

const GoodsList = ({listId}) => {
    const classes = useToolbarStyles()

    const [goods, setGoods] = useState([])
    const [nameForSearch, setNameForSearch] = useState('')

    const fetchGoods = () => getGoods(listId, setGoods, nameForSearch)

    useEffect(fetchGoods, [listId, nameForSearch])

    const nameChanged = event => {
        setNameForSearch(event.target.value);
    }

    return (
        <div className={classes.table}>
            <Toolbar className={clsx(classes.root)}>
                <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                    <TextField id="standard-basic"
                               label="Поиск товара"
                               value={nameForSearch}
                               onChange={nameChanged}/>
                </Typography>
                <div className={classes.button}>
                    <Tooltip title="Вернуться к списку">
                        <Fab color="primary" aria-label="add" size="big" href={`${baseClientURL}lists/${listId}`}>
                            <ArrowBack/>
                        </Fab>
                    </Tooltip>
                </div>
            </Toolbar>
            <TableContainer component={Paper} >
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableBody>
                        {goods.map(goods => <GoodsRow goods={goods} listId={listId} refreshList={fetchGoods}/>)}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default GoodsList
