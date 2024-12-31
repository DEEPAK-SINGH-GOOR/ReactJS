import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(num + 1)
    }
    const decrement = () => {
        if (num == 0) {
            alert("0 Not Decreased")
        }
        else {
            setNum(num - 1)
        }

    }
    return (
        <div className='container'>
            <div className='center'>
                <h1>{num}</h1>
                <div className='btn'>
                    <button onClick={increment}>Increment</button>
                    <button onClick={decrement}>Decrement</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;