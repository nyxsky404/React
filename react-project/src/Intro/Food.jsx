//! we can use javascript before return without {}
//! But inside for js needs {} if we use write inside html element/ fragments

function Food(){
    let food1 = "Orange"
    let food2 = "Mango"

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    )
}

export default Food
