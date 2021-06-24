import {deleteRequest, getRequest, postRequest, putRequest} from "./abstractService";

const purchasesUrl = 'purchases'

export const postPurchase = (purchase, refreshData, params) => {
    postRequest(purchase, purchasesUrl, refreshData, params)
}

export const putPurchase = (purchase, refreshData) => {
    putRequest(purchase, purchasesUrl, refreshData)
}

export const getPurchases = refreshData => {
    getRequest(refreshData, purchasesUrl)
}

export const deletePurchase = (id, refreshData) => {
    deleteRequest(id, purchasesUrl, refreshData)
}
