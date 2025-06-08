//* Updating Object with useState: using updater function and ({spread operator, Key: change value})

// ex: setCar(c => ({...c/ year: 2025}))
//! we need () outside object as {} with arrow function is not an object

import React, {useState} from 'react'

function UpdateObject(){
    const [car, setCar] = useState({year:2024,
                                    make: "Ford",
                                    model: "mustang"})
    
    const handleYear = (e) => {
        setCar(c => ({...c, year: e.target.value}))
    }

    const handleMake = (e) => {
        setCar(c => ({...c, make: e.target.value}))
    }

    const handleModel = (e) => {
        setCar((c) => ({...c, model: e.target.value}))
    }

    return(<>
        <input type="number" value={car.year} onChange={handleYear}/>
        <br/>
        <input type="text" value={car.make} onChange={handleMake}/>
        <br/>
        <input type="text" value={car.model} onChange={handleModel}/>
        <br/>
        <p>{car.year}</p>
        <p>{car.make}</p>
        <p>{car.model}</p>

    </>)
}

export default UpdateObject