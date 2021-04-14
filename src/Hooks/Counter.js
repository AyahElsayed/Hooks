import React, { useState , useEffect, useRef} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('')
    const inputRef = useRef()
    const reachMaxRef = useRef(false)
    const handleTitle = () => {setTitle('semicolon academy')}  
    const handleCounter = () => {
        if (counter >= 10){
            reachMaxRef.current = true
            console.log('you reach max clicks')
        }
        else {
            setCounter(counter + 1) // or setCounter((c)=>c+1)
        }
    }  

    useEffect(() => {
        console.log('inside useEffect 1')
        document.title = title
        return () =>{
            setTimeout(()=>{
                setTitle('')
                console.log('cleanup')
            },1000)
        }
    }, [title])

    useEffect(() => {
        console.log('inside useEffect 2')
        document.title = `You are clicked ${counter}`
    }, [counter])

    useEffect(() => {
        inputRef.current.focus()
    })

    return (
        <div className="container text-center pt-5">
            <input type="text"
            ref={inputRef}
            />
            <br/>
            <button className="btn-primary btn mt-3"
            onClick={handleCounter}> 
            Count up
            </button>
            <h1 className="mt-3">{counter}</h1>

            <button className="btn-primary btn"
            onClick={handleTitle}> 
            Change title 
            </button>
        </div>
    )
}

export default Counter
