import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction, changeStepAction } from './actions/actionCreater';


const Counter = (props) => {
    // const increment = () => {
    //     props.dispatch(createActionIncrement());
    // }

    // const decrement = () => {
    //     props.dispatch(createActionDecrement());
    // }
    console.log(props);
    
    const onChangeStep = ({target: {value}}) => {
        props.changeStep(Number(value));
    }

    return (
        <>
            <h1>{props.counter}</h1>
            <input type='number' name='step' onChange={onChangeStep} value={props.step} />
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
        </>
    );
}


const mapStateToProps = (state) => {
    return state
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch(createActionIncrement()),
//         decrement: () => dispatch(createActionDecrement())
//     }
// }


const mapDispatchToProps = {
    increment: incrementAction,
    decrement: decrementAction,
    changeStep: changeStepAction
}


const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);



export default WrappedCounter;
