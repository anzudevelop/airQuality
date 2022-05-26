import {chartsAPI} from "../api/api";

const UPDATE_TEMPERATURE_DATA = 'UPDATE_TEMPERATURE_DATA'
const UPDATE_CO2_DATA = 'UPDATE_CO2_DATA'

let initialState = {
    temperatureChartData: [],
    co2ChartData: [],
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

export default chartsReducer