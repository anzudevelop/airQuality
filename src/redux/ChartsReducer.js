import {chartsAPI} from "../api/api";

const UPDATE_TEMPERATURE_DATA = 'UPDATE_TEMPERATURE_DATA'
const UPDATE_CO2_DATA = 'UPDATE_CO2_DATA'
const UPDATE_MHZ19B_DATA = 'UPDATE_MHZ19B_DATA'
const UPDATE_TGS2611_DATA = 'UPDATE_TGS2611_DATA'
const UPDATE_SDS011_DATA = 'UPDATE_SDS011_DATA'
const UPDATE_BMP280_DATA = 'UPDATE_BMP280_DATA'
const UPDATE_SHT30_DATA = 'UPDATE_SHT30_DATA'
const UPDATE_DS18B20_DATA = 'UPDATE_DS18B20_DATA'

let initialState = {
    temperatureChartData: [],
    co2ChartData: [],
    mhz19bData: [],
    tgs2611Data: [],
    sds011Data: [],
    bmp280Data: [],
    sht30Data: [],
    ds18b20Data: [],
}

const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEMPERATURE_DATA: {
            return {
                ...state,
                temperatureChartData: action.tempData,
            }
        }
        case UPDATE_CO2_DATA: {
            return {
                ...state,
                co2ChartData: action.co2Data,
            }
        }
        case UPDATE_MHZ19B_DATA: {
            return {
                ...state,
                mhz19bData: action.data,
            }
        }
        case UPDATE_TGS2611_DATA: {
            return {
                ...state,
                tgs2611Data: action.data,
            }
        }
        case UPDATE_SDS011_DATA: {
            return {
                ...state,
                sds011Data: action.data,
            }
        }
        case UPDATE_BMP280_DATA: {
            return {
                ...state,
                bmp280Data: action.data,
            }
        }
        case UPDATE_SHT30_DATA: {
            return {
                ...state,
                sht30Data: action.data,
            }
        }
        case UPDATE_DS18B20_DATA: {
            return {
                ...state,
                ds18b20Data: action.data,
            }
        }
        default:
            return state
    }
}

const updateTemperatureData = (data) => ({
    type: UPDATE_TEMPERATURE_DATA,
    tempData: data,
})
const updateCO2Data = (data) => ({
    type: UPDATE_CO2_DATA,
    co2Data: data,
})


const updateMhz19bData = (data) => ({
    type: UPDATE_MHZ19B_DATA,
    data
})
const updateTgs2611Data = (data) => ({
    type: UPDATE_TGS2611_DATA,
    data
})
const updateSds011Data = (data) => ({
    type: UPDATE_SDS011_DATA,
    data
})
const updateBmp280Data = (data) => ({
    type: UPDATE_BMP280_DATA,
    data
})
const updateSht30Data = (data) => ({
    type: UPDATE_SHT30_DATA,
    data
})
const updateDs18b20Data = (data) => ({
    type: UPDATE_DS18B20_DATA,
    data
})



export const setTemperatureData = () => {
    return (dispatch) => {
        chartsAPI.getTemperature().then(data => {
            dispatch(updateTemperatureData(data))
        })
    }
}
export const setCO2Data = () => {
    return (dispatch) => {
        chartsAPI.getCO2().then(data => {
            dispatch(updateCO2Data(data))
        })
    }
}



export const setMhz19b = () => {
    return (dispatch) => {
        chartsAPI.getMhz19b().then(data => {
            dispatch(updateMhz19bData(data))
        })
    }
}
export const setTgs2611 = () => {
    return (dispatch) => {
        chartsAPI.getTgs2611().then(data => {
            dispatch(updateTgs2611Data(data))
        })
    }
}
export const setSds011 = () => {
    return (dispatch) => {
        chartsAPI.getSds011().then(data => {
            dispatch(updateSds011Data(data))
        })
    }
}
export const setBmp280 = () => {
    return (dispatch) => {
        chartsAPI.getBmp280().then(data => {
            dispatch(updateBmp280Data(data))
        })
    }
}
export const setSht30 = () => {
    return (dispatch) => {
        chartsAPI.getSht30().then(data => {
            dispatch(updateSht30Data(data))
        })
    }
}
export const setDs18b20Data = () => {
    return (dispatch) => {
        chartsAPI.getDs18b20().then(data => {
            dispatch(updateDs18b20Data(data))
        })
    }
}

export default chartsReducer