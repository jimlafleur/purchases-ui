import React, {useEffect, useState} from "react";
import ProductAddForm from "./ProductAddForm";
import {getCategories} from "../../service/categoryService";
import {getProducts} from "../../service/productService";
import ProductTable from "./ProductTable";

const Products = ({showSuccess, showError}) => {

    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    const fetchCategories = () => getCategories(setCategories)
    const fetchProducts = () => getProducts(setProducts)

    useEffect(fetchCategories, [])
    useEffect(fetchProducts, [])


    return (
        <div className="container-fluid">
            <ProductAddForm refreshProducts={fetchProducts}
                            categories={categories}
                            showError={showError}
                            showSuccess={showSuccess}/>
            <ProductTable refreshData={fetchProducts}
                          rows={products}
                          showError={showError}
                          showSuccess={showSuccess}/>
        </div>
    )
}

export default Products
