import * as axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '3a590ed1-1993-437f-aa3b-01d103549889'
    }
})

export let APIUnfollow = (id) => {
    return instance.delete(`follow/${id}`)
}

export let APIFollow = (id) => {
    return instance.post(`follow/${id}`)
}
export let APIFistGetUsers = (count, currentPage) => {
    return instance.get(`users?count=${count}&page=${currentPage}`)
}

export let APIGetUsers = (count, number) => {
    return instance.get(`users?count=${count}&page=${number}`)
}

export let APIGetUser = (id) => {
    return instance.get(`profile/` + id)
}

export let APISetStatus = (status) => {
    return instance.put(`profile/status/`, {status:status})
}

export let APIGetStatus = (id) => {
    return instance.get(`profile/status/${id}`)
}

export let APIAuth = () => {
    return instance.get(`auth/me`)
}

export let APIAuth_login = (email, password, rememberMe, captcha) => {
    return instance.post(`/auth/login`,{email, password, rememberMe, captcha})
}

export let APIAuth_logOut = () => {
    return instance.delete(`/auth/login`)
}

