import axios from "axios";

const baseURL = `http://127.0.0.1:8080/`

const api = axios.create({baseURL})

export const getRequest = (setter, url) => {
    api.get(url)
        .then(data => setter(data.data))
}

export const postRequest = (data, url, setState) => {
    api.post(baseURL + url, data)
        .then(response => {
            console.log(response);
            setState()
        })
        .catch(err => {
            console.log(err);
        });
}

export const deleteRequest = (id, url, setState) => {
    api.delete(`${baseURL + url}/${id}`)
        .then(response => {
            console.log(response);
            setState()
        })
        .catch(err => {
            console.log(err);
        });
}

export const putRequest = (object, url, refreshData) => {
    api.put(`${baseURL + url}/${object.id}`, object)
        .then(response => {
            console.log(response);
            refreshData()
        })
        .catch(err => {
            console.log(err);
        });
}
