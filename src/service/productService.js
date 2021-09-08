import {deleteRequest, getRequest, postRequest, putRequest} from "./abstractService";

const productsUrl = 'products'

export const getProducts = (refreshData) => {
    getRequest(refreshData, productsUrl)
}

export const postProduct = (product, refreshProducts, params) => {
    postRequest(product, productsUrl, refreshProducts, params)
}

export const deleteProduct = (productId, refreshProducts) => {
    deleteRequest(productId, productsUrl, refreshProducts)
}

export const editProduct = (product, refreshProducts, params) => {
    putRequest(product, productsUrl, refreshProducts, params)
}
