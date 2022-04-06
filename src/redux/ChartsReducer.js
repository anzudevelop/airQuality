const UPDATE_CHARTS_DATA = 'UPDATE_CHARTS_DATA'

let initialState = {
    charts: [
        123
    ],
}

const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHARTS_DATA: {
            return {
                ...state,
                charts: [...state.charts],
            }
        }
        default:
            return state
    }
}


export const updateChartsData = (data) => ({
    type: UPDATE_CHARTS_DATA,
    newData: data,
})

export default chartsReducer