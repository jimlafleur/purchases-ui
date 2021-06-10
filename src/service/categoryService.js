import {postRequest, getRequest} from "./abstractService";

const categoriesUrl = 'categories'

export const getCategories = setCategories => {
    getRequest(setCategories, categoriesUrl)
}

export const postCategories = (category, fetchCategories) => {
    postRequest(category, categoriesUrl, fetchCategories)
}
