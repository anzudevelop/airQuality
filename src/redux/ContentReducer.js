import {chartsAPI} from "../api/api";

const UPDATE_SYS_DATA = 'UPDATE_SYS_DATA'
const UPDATE_SENSORS_DATA = 'UPDATE_SENSORS_DATA'
const UPDATE_SENSORS_STATUS = 'UPDATE_SENSORS_STATUS'


let initialState = {
    sysData: {
        device: true,
        mqtt: false,
        wifi: true,
        power: 100,
    },
    sensorsData: {
        co2: true,
        temp: true,
        dust: true,
        methane: true,
        tempWet: true,
        tempPres: true,
    },
    sensorsStatus: [],
}

const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SYS_DATA: {
            return {
                ...state,
                sysData: {
                    device: action.data.device,
                    mqtt: action.data.mqtt,
                    wifi: action.data.wifi,
                    power: action.data.power,
                }
            }
        }
        case UPDATE_SENSORS_DATA: {
            return {
                ...state,
                sensorData: {
                    co2: action.data.co2,
                    temp: action.data.temp,
                    dust: action.data.dust,
                    methane: action.data.methane,
                    tempWet: action.data.tempWet,
                    tempPres: action.data.tempPres,
                }
            }
        }
        case UPDATE_SENSORS_STATUS: {
            return {
                ...state,
                sensorsStatus: action.data,
            }
        }
        default:
            return state
    }
}

export const updateSysData = (data) => ({
    type: UPDATE_SYS_DATA,
    newData: data,
})

export const updateSensorsData = (data) => ({
    type: UPDATE_SENSORS_DATA,
    newData: data,
})

const updateSensorsStatus = (data) => ({
    type: UPDATE_SENSORS_STATUS,
    data
})


export const setSensorsStatus = () => {
    return (dispatch) => {
        chartsAPI.getSensorsStatus().then(data => {
            dispatch(updateSensorsStatus(data))
        })
    }
}

export default contentReducer