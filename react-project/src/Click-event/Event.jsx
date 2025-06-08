function Event(){

    const handler = (event) => {console.log(event)}
    const ChangeButtonText = (event) => {event.target.textContent ="Don't dare 🤬"}
    // onclick, button text changes to "Don't dare 🤬"

    return(<>
        <button onClick ={(event) => ChangeButtonText(event)}>Click me 😉 </button>
        <br></br>
    </>)
}

export default Event