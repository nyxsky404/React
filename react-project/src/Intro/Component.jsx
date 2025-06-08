//* we can write multiple function inside one component but we have to call that in main function  of that component with same syntax <name/>

function Name(){
    return (
        <h1>New function</h1>
    )
}

function Component(){
    return(
        <>
            <h3>Main function</h3>
            <Name/>
        </>
    )
}
export default Component

