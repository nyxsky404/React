//* conditional rendering = allows you to control what gets rendered in your application based on certain conditions (show, hide, or change components)

//! not only in styling part but in everywhere we don't use "-" like camel-case instead we use camelCase. e.g- for variable name


function UserGreeting({isLogin = false, name="Guest"}){
    
    // if (isLogin){
    //     return (<h3>Welcome {name}</h3>)
    // }
    // return(<h3>Please Login {name}</h3>)

    const isLog = <h3>Welcome {name}</h3>  //! we can use html in variables also
    const logPrompt = <h3>Please Login {name}</h3>

    return (isLogin ? isLog : logPrompt )
}

export default UserGreeting
