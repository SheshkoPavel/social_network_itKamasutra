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
    },

    getProfile (userId) {
        return profileAPI.getProfile(userId)
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`, {
        });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`/auth/login`, {email, password, rememberMe}, {});
    },
    logout() {
        return instance.delete(`/auth/login`);
    }
};

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`/profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus (status) {
        return instance.put(`/profile/status`, {status: status})
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`/profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};