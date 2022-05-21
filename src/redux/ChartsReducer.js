const UPDATE_CHARTS_DATA = 'UPDATE_CHARTS_DATA'

let initialState = {
    charts: [
        [
            {id: 1, temperature: 0, date: 'fdggggggggggggggggggggggggggggggg'},
            {id: 1, temperature: 0, date: 'fdggggggggggggggggggggggggggggggg'}
        ]
    ],
}

const chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_CHARTS_DATA: {
            return {
                ...state,
                charts: [action.newData],
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