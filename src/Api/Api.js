import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "ae07db0a-7a22-4b84-977a-0ecdb0a7e5fa"
    }
});

export const getUsers = (currentPage=1, pageSize=10) => {
    return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
        return response.data
    })
}

export const followed = (usersData) => {
    return instanse.post(`follow/${usersData}`).then(response => {
        return response.data
    })
}
