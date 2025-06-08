//* React hook = Special function that allows functional components to use React features (useState, usEffect, useContext, useReducer, useCallback, and more...)

//* useState() = A React hook that allows the creation of a "stateful variable" and a "setter function" to update its value in the Virtual DOM.
// [name, setName]: var , setVar - just naming convention in camel case ("set" with "variable" name)

//! if we need to change the value of stateful variable (name), we have to do so with the setter function(setName)


import React,{useState} from "react"

function UseState(){ 

    const [name, setName] = useState() // initial value of name is null
    const [age, setAge] = useState(0) // initial value of age is 0
    const [isEmployed, setIsEmployed] = useState(false)

    const Name = () => {
        setName("Mizu")
    }

    const AgeInc = () => {
        setAge(age+2) // age++ or ++age will not work as they try to change the value of variable
    }

    const Employed = () => {
        if (age >= 18){
            setIsEmployed(true)
        }
        else{
            setIsEmployed(false)
        }
    }

    return (<div style = {{border: "2px solid black", height: "auto", width: "100%", padding: "10px"}}>


                <p>Name: {name}</p>

                {/* //* Two ways to call setter function */}
                <button onClick={Name}>usState Magic 1 😩</button>
                <button onClick={()=>setName("Yuri")}>usState Magic 2 😩</button>
                {/* setName is function and name is its variable but unlike others it rerenders the virtual dom */}

                <p>Age: {age}</p>
                <button onClick={AgeInc}>Way 1 IncAge 🤷</button> 
                <button onClick={()=> setAge(age-2)}>Way 2 IncAge 🤷</button> 

                <p> Employed: {isEmployed ? "Yes": "No"}</p>
                <button onClick={Employed}>Check Employee 🤷</button> 


            </div>
    )
}

export default UseState