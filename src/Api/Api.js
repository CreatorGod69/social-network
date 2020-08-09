import * as axios from 'axios'

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'ae07db0a-7a22-4b84-977a-0ecdb0a7e5fa'
    }
});

export const usersAPI = {
    getUsers(currentPage=2, pageSize=10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    follow(usersData) {
        return instanse.post(`follow/${usersData}`).then(response => {
            return response.data
        })
    },
    unFollow(usersData) {
        return instanse.delete(`follow/${usersData}`).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instanse.get(`profile/${userId}`)
    },
    getStatus(userId) {
        return instanse.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instanse.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instanse.get(`auth/me`, {withCredentials: true})
    }
}
