const UPDATE_TIME = 'UPDATE_TIME'
const CLICK_ON_MENU = 'CLICK_ON_MENU'

let initialState = {
    time: {
        hours: '00',
        minutes: '00',
    },
    isMenuOpen: false,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TIME: {
            return {
                ...state,
                time: {
                    hours: action.newTime.hours,
                    minutes: action.newTime.minutes,
                }
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