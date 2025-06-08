function Image(){

    const ImgUrl = "./src/assets/react.svg"
    const handler = (e) => {e.target.style.display = "none"}
    // on click , image disappear

    return (
        <>
            <img onClick={(e) => handler(e)} src={ImgUrl}  />
        </>
    )
}

export default Image