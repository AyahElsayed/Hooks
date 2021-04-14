import React, { useState, useLayoutEffect, useRef, useCallback } from 'react'
import { Button } from './Button'

function UseLayoutEffectEx() {
    const [counter, setCounter] = useState(0)
    const [divData, setDivData] = useState({})
    const [listOfCounts, setListOfCounts] = useState([1])
    const divRef = useRef()

    const onClick = useCallback(
        (n) => {
            setCounter((c) => c + n)
        },
        [setCounter],
    )
    useLayoutEffect(() => {
        setDivData(divRef.current.getBoundingClientRect())
    }, [listOfCounts])

    const handleAdd = () => {
        setListOfCounts([...listOfCounts,100])
    }
    return (
        <div className="container text-center pt-5">
            <button className="btn-primary btn mt-3"
                onClick={handleAdd}>
                add more
            </button>
            <div ref={divRef}>
                {listOfCounts.map((conut) => <Button Counterfn={onClick} lable={conut} key={conut} n={conut} />)}
                <Button Counterfn={onClick} lable={'Conut up..'} n={1} />
                <h1 className="mt-3">{counter}</h1>
            </div>
            <pre>
                {JSON.stringify(divData, null, 2)}
            </pre>
        </div>
    )
}

export default UseLayoutEffectEx
