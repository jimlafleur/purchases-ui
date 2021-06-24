import React, {useEffect, useState} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import {classes} from "istanbul-lib-coverage";
import TableBody from "@material-ui/core/TableBody";
import ProductRow from "./ProductRow";
import {getProducts} from "../../service/productService";

const ProductList = ({listId}) => {

    const [products, setProducts] = useState([])

    const fetchProducts = () => getProducts(listId, setProducts)

    useEffect(fetchProducts, [listId])

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableBody>
                    {products.map(product => <ProductRow product={product} listId={listId} refreshList={fetchProducts}/>)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductList
