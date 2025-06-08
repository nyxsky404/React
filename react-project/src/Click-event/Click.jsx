//* onClick event handler
// onClick ={function}

//* onDoubleClick ={function}

function Click(){

    // without parameters
    const handler = () => {console.log("Yo! Bro, don't dare to touch me 🤬")}

    // with parameters
    const para = (name) => {console.log(`I know your name: ${name} 🤫`) }

    return(
        <>
            <button onClick={handler} >😑</button>
            <br></br>

            {/* //* This will call "para" before even clicking on button */}
            {/* <button onClick={para("Sam")} >🤫</button> */}

             {/* Correct way to call with parameters */}
            <button onClick ={()=> para("Stupid Rizzler")}>🗿</button>
            <br></br>

            <button onDoubleClick ={()=> para("Bloody Mogger")}>🗿🗿 </button>
            <br></br>
        </>
    )
}

export default Click