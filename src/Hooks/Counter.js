import React, { useState , useEffect} from 'react'

function Counter() {
    const [counter, setCounter] = useState(0)
    const [title, setTitle] = useState('')
    const handleCounter = () => {setCounter(counter + 1)}  // or setCounter((c)=>c+1)
    const handleTitle = () => {setTitle('semicolon academy')}  

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
    return (
        <div className="container text-center pt-5">
            <button className="btn-primary btn"
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
