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
    return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
}

export let APIAuth = () => {
    return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
}

