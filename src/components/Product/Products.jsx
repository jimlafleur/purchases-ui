import React, {useEffect, useState} from "react";
import ProductAddForm from "./ProductAddForm";
import {getCategories} from "../../service/categoryService";
import {getProducts} from "../../service/productService";
import ProductTable from "./ProductTable";

const Products = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)
    const fetchProducts = () => getProducts(setProducts)

    useEffect(fetchCategories, [])
    useEffect(fetchProducts, [])


    return (
        <div className="container-fluid">
            <ProductAddForm refreshProducts={fetchProducts} categories={categories}/>
            <ProductTable refreshData={fetchProducts} rows={products}/>
        </div>
    )
}

export default Products
