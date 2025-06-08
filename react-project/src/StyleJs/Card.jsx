// How to make card in react

import profile from "../assets/react.svg"

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profile} alt='profile image'></img>
            <h2>Bro Code</h2>
            <p>I am learning react from Bro code</p>
        </div>
    )
}

export default Card

// for class name in:
// css: class=" "
//* jsx: className=" " as in jsx class is a reserved keyword

//  src={profile}