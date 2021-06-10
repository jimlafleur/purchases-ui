import {getRequest, postRequest} from "./abstractService";

const purchasesUrl = 'purchases'

export const postPurchases = (purchase, fetchPurchases) => {
    postRequest(purchase, purchasesUrl, fetchPurchases)
}

export const getPurchases = setPurchases => {
    getRequest(setPurchases, purchasesUrl)
}

export const deletePurchases = setPurchases => {
    getRequest(setPurchases, purchasesUrl)
}
