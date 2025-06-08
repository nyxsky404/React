//* Making lists Reusable component with props

function Lists2({item = [] ,category = "unknown"}){
    const catalog = item.map(i => <li>{i.name}</li>)

    return (
        <>
            <h3>{category}</h3>
            <ol>{catalog}</ol>
        </>
    )
}

export default Lists2