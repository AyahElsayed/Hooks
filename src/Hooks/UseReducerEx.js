import React, { useState, useReducer } from 'react'
import { Button } from './Button'

const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state
    }
}
const UseReducerEx = () => {
    // const [count, setCount] = useState(0)
    const [count, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <Button lable="increment" onClick={() => dispatch({ type: INCREMENT })} />
            <h1>{count}</h1>
            <Button lable="decrement" onClick={() => dispatch({ type: DECREMENT })} />
        </div>
    )
}

export default UseReducerEx
