//* useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
// This component re-renders
// This component mounts
// The state of a value

//! we can have multiple useEffect hook

//! useEffect(function, [dependencies])
// 1. useEffect (() => {})           // Runs after every re-render (any element)
// 2. useEffect（（）=>｛｝，[])       // Runs only on "component" mount (means default value of any variable using)
// 3. useEffect(() => {}, [value1, value2])   // Runs on component mount + whenever any "value1" or "value2" changes

//*🔄 React Component Lifecycle Phases:
// Mounting - When a component is first created and added to the DOM
// Updating - Re-render due to state/props change
// Unmounting - Component is removed

//* USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts

import React, {useState, useEffect} from 'react'

function UseEffect(){
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")

    useEffect(()=> {
        document.title = `count: ${count} ${color}`
    },[count, color])

    const add = () => {
        setCount(c => c+1)
    }

    const sub = () => {
        setCount(c => c-1)
    }

    const Color = () => {
        setColor(c => c === "green" ? "red" : "green")
    }

    return(<>
        <p style ={{"color": color}}>Count: {count}</p>
        <p>Color: {color}</p>
        <br/>
        <button onClick={add}>Add</button>
        <button onClick={sub}>Subtract</button>
        <br/>
        <button onClick={Color}>Color</button>
    </>)
}

export default UseEffect