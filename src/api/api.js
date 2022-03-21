import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY" : "f8ad98d1-7488-475c-a890-9534f68a3e9c"
    }
});

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    unfollowUser (userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    followUser (userId) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    }
};

export const profilesAPI = {

};