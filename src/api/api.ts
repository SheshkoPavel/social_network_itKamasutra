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

    unfollowUser (userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data);
    },

    followUser (userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data);
    },

    getProfile (userId: number) {
        return profileAPI.getProfile(userId)
    }
};

//authAPI typing
export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}

export enum ResultCodeForCaptcha {
    CaptchaIsRequired = 10
}

type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginResponseType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeForCaptcha
    messages: Array<string>
}

export const authAPI = {
    me() {
        return instance.get<MeResponseType>(`auth/me`, {
        });
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}, {});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};

export const securityAPI = {
    getCaptchaURL(){
        return instance.get(`security/get-captcha-url`)
    }
}

export const profileAPI = {
    getProfile (userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto (photoFile) {
        let formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
}

export const testAPI = {
    getTestUsers () {
        return axios.get('http://localhost:5000/api/users')
    }
}