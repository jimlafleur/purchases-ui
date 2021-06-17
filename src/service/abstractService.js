import axios from "axios";
import {baseServerURL} from "../constants";


const api = axios.create({baseURL: baseServerURL})

export const getRequest = (setter, url) => {
    api.get(url)
        .then(data => {
            console.log(data.data)
            setter(data.data)
        })
}

export const postRequest = (object, url, refreshData, params) => {
    api.post(baseServerURL + url, object, {params: params})
        .then(response => {
            console.log(response);
            refreshData()
        })
        .catch(err => {
            console.log(err);
        });
}

export const deleteRequest = (id, url, refreshData) => {
    api.delete(`${baseServerURL}${url}/${id}`)
        .then(response => {
            console.log(response);
            refreshData()
        })
        .catch(err => {
            console.log(err);
        });
}

export const putRequest = (object, url, refreshData) => {
    api.put(`${baseServerURL}${url}/${object.id}`, object)
        .then(response => {
            console.log(response);
            refreshData()
        })
        .catch(err => {
            console.log(err);
        });
}
