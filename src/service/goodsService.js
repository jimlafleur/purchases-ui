import {getRequest} from "./abstractService";

const productsUrl = 'goods'

export const getGoods = (listId, refreshData, nameForSearch) => {
    getRequest(refreshData, productsUrl, {listId, nameForSearch})
}