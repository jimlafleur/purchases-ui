import {getRequest, postRequest} from "./abstractService";

const productsUrl = 'products'

export const getProducts = (refreshData) => {
    getRequest(refreshData, productsUrl)
}

export const postProduct = (product, refreshProducts, params) => {
    postRequest(product, productsUrl, refreshProducts, params)
}