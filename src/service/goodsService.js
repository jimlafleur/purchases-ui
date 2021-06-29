import {getRequest} from "./abstractService";

const productsUrl = 'goods'

export const getGoods = (listId, refreshData) => {
    getRequest(refreshData, productsUrl, {listId})
}