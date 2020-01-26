const SETLEVEL = 'SETLEVEL';
const NEXTLEVEL = 'NEXTLEVEL';
const HEARTCOLLAB = 'HEARTCOLLAB'
const SETMIND = 'SETMIND'
const HIDEOPTION = 'HIDEOPTION'
const STEPCOLLAB = 'STEPCOLLAB'



export const setLevel = (level) => ({type: SETLEVEL,level:level});
export const nextLevel = () => ({type: NEXTLEVEL});
export const heartCollab = (val) => ({type: HEARTCOLLAB, val:val});
export const StepCollab = () => ({type: STEPCOLLAB});
export const setMind = (mind) => ({type: SETMIND, mind});
export const hideOption = (item) => ({type: HIDEOPTION, item});


let initialState = {
    currentLevel: 0,
    heart: 3,
    step: 40,
    currentMind: [
        [0, 'Голова болит'],
        [0, 'Открываешь глаза'],
        [0, 'Удивленно'],
        [1, '....'],

    ],
    hide: []
}

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETLEVEL: {
            return {
                ...state,
                currentLevel: action.level
            }
        }
        case NEXTLEVEL: {
            return {
                ...state,
                currentLevel: state.currentLevel + 1
            }
        }
        case HEARTCOLLAB: {
            return {
                ...state,
                heart: state.heart + action.val ,
            }
        }
        case STEPCOLLAB: {
            return {
                ...state,
                step: state.step - 1,
            }
        }
        case SETMIND: {
            return {
                ...state,
                currentMind: action.mind
            }
        }
        case HIDEOPTION: {
            return {
                ...state,
                hide: [...state.hide, action.item]
            }
        }

        default:
            return state;
    }

}

export default gameReducer