import React, { useState , useEffect, useRef,useCallback} from 'react'
import { Button } from './Button'

function Counter() {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('')

    const listOfCounts = [1, 4, 6, 10, 50]

    const inputRef = useRef()
    const reachMaxRef = useRef(false)
    // const handleTitle = () => {setTitle('semicolon academy')}  
    const handleCounter = () => {
        if (counter >= 10){
            reachMaxRef.current = true
            console.log('you reach max clicks')
        }
        else {
            setCounter(counter + 1) // or setCounter((c)=>c+1)
        }
    }  

    // useEffect(() => {
    //     console.log('inside useEffect 1')
    //     document.title = title
    //     return () =>{
    //         setTimeout(()=>{
    //             setTitle('')
    //             console.log('cleanup')
    //         },1000)
    //     }
    // }, [title])

    useEffect(() => {
        console.log('inside useEffect 2')
        document.title = `You are clicked ${counter}`
    }, [counter])

    useEffect(() => {
        inputRef.current.focus()
    })

    const onClick = useCallback(
        (n) => {
            setCounter((c) =>  c + n )
        },
        [setCounter],
    )
// useCallback reduce the number of rendering
// using with memoization
    return (
        <div className="container text-center pt-5">
            <input type="text"
            ref={inputRef}
            />
            <br/>
            {listOfCounts.map((conut) => <Button onClick={onClick} lable={conut} key={conut} n={conut} />)}
            <Button onClick={onClick} lable={'Conut up..'} n={1}/>
            <h1 className="mt-3">{counter}</h1>
            {/* <Button onClick={handleTitle} lable={'Change title'}/> */}

        </div>
    )
}

export default Counter
