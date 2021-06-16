import {deleteRequest, getRequest, postRequest, putRequest} from "./abstractService";

const listsUrl = 'lists'

export const postLists = (list, fetchLists) => {
    postRequest(list, listsUrl, fetchLists)
}

export const getAllLists = setLists => {
    getRequest(setLists, listsUrl)
}

export const getList = (id, setLists) => {
    getRequest(setLists, `${listsUrl}/${id}`)
}

export const deleteList = (listId, fetchLists) => {
    deleteRequest(listId, listsUrl, fetchLists)
}

export const editList = (list, refreshLists) => {
    putRequest(list, listsUrl, refreshLists)
}
