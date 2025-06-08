// Project using useState Hook and click events

import React, {useState} from 'react'

function Project1(){
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }   

    const reset = () => {
        setCount(0)
    }

    return(
    <div style = {{border: "2px solid black", height: "auto", width: "100%", padding: "10px", margin:"20px"}}>
        <p>{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
    </div>)
}

export default Project1