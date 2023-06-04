import ACTION_TYPES from './actiontypes';


export const incrementAction = () => {
    return ({
        type: ACTION_TYPES.INCREMENT
    })
}


export const decrementAction = () => {
    return ({
        type: ACTION_TYPES.DECREMENT
    })
}


export const changeStepAction = (value) => {
    return({
        type: ACTION_TYPES.STEP_CHANGE,
        value
    })
}