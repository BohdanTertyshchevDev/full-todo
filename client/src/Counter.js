import React, {useReducer} from 'react';
import {connect} from 'react-redux';
import { incrementAction, decrementAction, changeStepAction,toggleThemeAction } from './actions/actionCreater';


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


    const toggleTheme = () => {
        props.toggleTheme();
    }

    return (
        <>
          <div style={{backgroundColor: props.themes.isDarkMode ? 'gray' : 'white'}}>
            <h1>{props.counter.counter}</h1>
            <input type='number' name='step' onChange={onChangeStep} value={props.counter.step} />
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrement}>-</button>
            <button onClick={toggleTheme}>{props.themes.isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}</button>
          </div>
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
    changeStep: changeStepAction,
    toggleTheme: toggleThemeAction

}


const WrappedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);



export default WrappedCounter;
