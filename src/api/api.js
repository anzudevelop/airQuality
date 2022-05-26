import * as axios from "axios";

const instance = axios.create({
    //withCredentials: true,
    baseURL: 'http://185.209.28.217:7070/',
})

export const chartsAPI = {
    getTemperature() {
        return instance.get(`server-api/getTempData`).then(response => response.data)
    },
    getCO2() {
        return instance.get(`server-api/getCO2Data`).then(response => response.data)
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

