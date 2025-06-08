//* updater function = uses pending state to update stateful variable
//Good practice to use updater functions

//! Convention to write updater function: use first letter of stateful variable as lowercase or using prefix "prev" with stateful variable
// ex: setCount(c => c+1)  or  setCount(prevCount => prevCount + 1)

//! why using updater function:
//! React only renders the stateful variable when the function ends, 
//* so if i call multiple "setCount(count + 1)" inside "increment function" it basically doesn't rerender the value of count in each "setCount(count + 1)"

//  const increment = () => {
//  setCount(count + 10) } : 0+10  (staleValue + 10)

// react renders and now count = 10

// const increment = () => {
    // setCount(count + 10) : 0+10 -> not rendered
    // setCount(count + 10) : 0+10 -> not rendered
    // setCount(count + 10)} :0+10 -> as function ends , now it will rerender.

// the final value of count = 10

//! note: if different setter functions are there
//     const increment = () => {
//     setCount(count + 10) : 0+10 -> not rendered
//     setScore(score + 1)} : 0+1 -> not rendered

// now, rendered with count=10 and score=1

//* React batches multiple calling of setter function for performance when writing in this way


import React,{useState} from 'react'

function UpdaterFunction(){
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)

    const increment = () => {
        setCount(c => c+10) // 0+10 = 10 (Pending State)
        setCount(c => c+10) // 10+10 = 20 (pending state)
        setCount(c => c+10) // 20+10 = 30 (pending state)
        setScore(s => s+1) // 0+1 =1
    }

    const decrement = () => {
        setCount(c => c-10)
        setScore(s => s-1)
    }

    const reset = () => {
        setCount(0)
        setScore(0)
    }

    return(<>
            <p>Count: {count}</p>
            <p>Score: {score}</p>
            <br/>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>)

}

export default UpdaterFunction