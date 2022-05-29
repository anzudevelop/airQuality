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
    getMhz19b() {
        return instance.get(`server-api/mhz19b`).then(response => response.data)
    },
    getTgs2611() {
        return instance.get(`server-api/tgs2611`).then(response => response.data)
    },
    getSds011() {
        return instance.get(`server-api/sds011`).then(response => response.data)
    },
    getBmp280() {
        return instance.get(`server-api/bmp280`).then(response => response.data)
    },
    getSht30() {
        return instance.get(`server-api/sht30`).then(response => response.data)
    },
    getDs18b20() {
        return instance.get(`server-api/ds18b20`).then(response => response.data)
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

