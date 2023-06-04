import React, {useState} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);


    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }


    return (
        <>
            <h1>{counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    );
}

export default Counter;
