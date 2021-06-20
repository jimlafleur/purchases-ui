import {deleteRequest, getRequest, postRequest} from "./abstractService";

const purchasesUrl = 'purchases'

export const postPurchases = (purchase, fetchPurchases, params) => {
    postRequest(purchase, purchasesUrl, fetchPurchases, params)
}

export const getPurchases = setPurchases => {
    getRequest(setPurchases, purchasesUrl)
}

export const deletePurchases = (id, refreshData) => {
    deleteRequest(id, purchasesUrl, refreshData)
}
