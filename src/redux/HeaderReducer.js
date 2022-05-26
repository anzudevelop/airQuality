const UPDATE_TIME = 'UPDATE_TIME'
const CLICK_ON_MENU = 'CLICK_ON_MENU'

let initialState = {
    time: '',
    isMenuOpen: false,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TIME: {
            return {
                ...state,
                time: action.newTime
            }
        }
        case CLICK_ON_MENU: {
            return {
                ...state,
                isMenuOpen: !state.isMenuOpen,
            }
        }
        default:
            return state
    }
}

export const updateTime = (newTime) => ({
    type: UPDATE_TIME,
    newTime,
})

export const clickOnMenu = () => ({type: CLICK_ON_MENU})

export default headerReducer