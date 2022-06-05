import {chartsAPI} from "../api/api";


const UPDATE_SENSORS_DATA = 'UPDATE_SENSORS_DATA'


let initialState = {
    sensorsData: {
        bmp280: null,
        ds18b20: null,
        mhz19b: null,
        sds011: null,
        sht30: null,
        tgs2611: null,
    },

}

const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SENSORS_DATA: {
            return {
                ...state,
                sensorsData: action.data,
            }
        }
        default:
            return state
    }
}

const updateSensorsData = (data) => ({
    type: UPDATE_SENSORS_DATA,
    data
})

export const setSensorsData = () => {
    return (dispatch) => {
        chartsAPI.getSensorsData().then(data => {
            dispatch(updateSensorsData(data))
        })
    }
}


export default chartsReducer