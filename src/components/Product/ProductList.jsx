import React, {useEffect, useState} from "react";
import ProductAddForm from "./ProductAddForm";
import ProductRow from "./ProductRow";
import {getCategories} from "../../service/categoryService";
import {getProducts} from "../../service/productService";


const ProductList = () => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)
    const fetchProducts = () => getProducts(setProducts)

    useEffect(fetchCategories, [])
    useEffect(fetchProducts, [])


    return (
        <div className="container-fluid">
            <ProductAddForm refreshProducts={fetchProducts} categories={categories}/>
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                    {products.map(product => <ProductRow product={product}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductList
