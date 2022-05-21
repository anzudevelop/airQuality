import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://185.209.28.217:7070/',
})

export const chartsAPI = {
    getCharts() {
        return instance.get(`server-api/get`).then(response => response.data)
    },
    /*followUnfollow(isFollowed, userId) {
        if (!isFollowed) {
            return instance.post(`follow/${userId}`)
        }
        else {
            return instance.delete(`follow/${userId}`)
        }
    }*/
}

