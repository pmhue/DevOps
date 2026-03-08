import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "http://178.128.59.178:8800/api/",
    withCredentials: true,
})