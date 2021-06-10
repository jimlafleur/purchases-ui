import {deleteRequest, getRequest, postRequest, putRequest} from "./abstractService";

const listsUrl = 'lists'

export const postLists = (list, fetchLists) => {
    postRequest(list, listsUrl, fetchLists)
}

export const getLists = setLists => {
    getRequest(setLists, listsUrl)
}

export const deleteList = (listId, fetchLists) => {
    deleteRequest(listId, listsUrl, fetchLists)
}

export const editList = (list, refreshLists) => {
    putRequest(list, listsUrl, refreshLists)
}