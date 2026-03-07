import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://expressjs.phanminhhue.org:8800/api/",
    withCredentials: true,
})