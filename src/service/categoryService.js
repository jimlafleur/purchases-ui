import {deleteRequest, getRequest, postRequest, putRequest} from "./abstractService";

const categoriesUrl = 'categories'

export const getCategories = refreshCategories => {
    getRequest(refreshCategories, categoriesUrl)
}

export const postCategories = (category, refreshCategories) => {
    postRequest(category, categoriesUrl, refreshCategories)
}

export const deleteCategory = (categoryId, refreshCategories) => {
    deleteRequest(categoryId, categoriesUrl, refreshCategories)
}

export const editCategory = (category, refreshCategories) => {
    putRequest(category, categoriesUrl, refreshCategories)
}
