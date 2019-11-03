import axios from "axios/index";


let instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': "3a590ed1-1993-437f-aa3b-01d103549889"
    }
});

export const getUserApi = {
    getUsers(CurrentPage, PageSize) {
        return instance.get(`users?page=${CurrentPage}&count=${PageSize}`)
            .then(response => {
                return response.data
            })
    },
    postUsers(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
};

export const authAPI = {
    authAPI() {
        return instance.get(`auth/me`)
            .then(
                response => {
                    return response.data
                }
            )
    },
    auth(data) {
        return instance.post(`/auth/login/`, {
            email: data.email,
            password: data.password,
            rememberMe: data.rememberMe,
            captcha: data.captcha
        }).then(
            response => {
                return response.data
            }
        )
    },
    logOut() {
        return instance.delete(`/auth/login/`).then(
            response => {
                return response.data
            }
        )
    }
}

export const profileAPI = {
    setProfileData(userID) {
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response
            })
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`)
            .then(response => {
                return response
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
    }
}




