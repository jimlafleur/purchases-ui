import {getRequest} from "./abstractService";

const productsUrl = 'products'

export const getProducts = (listId, refreshData) => {
    getRequest(refreshData, productsUrl, {listId})
}