//* Using javascript inside html tag requires { }
//* we can write javascript as normally before return inside function.

//! we can write multiple function inside one component but we have to call that in main function  of that component with same syntax <name/>

//! If you're rendering multiple sibling JSX elements (from .map(), for, reduce, etc.), each child must have a unique key prop to keep track of which items have changed, are added, or are removed. This helps React identify which items have changed, are added, or are removed.

//* we can use same ids in different arrays/objects


function Lists(){
    return(
        <>
            <List_Methods/>
            <ListObject/>
            <Obj/>
        </>
    )
}


// 1. List
function List_Methods(){
    const fruits = ["apple","mango","banana","orange"]

    fruits.sort()  // Sorting lexicographically
    //* fruits.sort((a,b) => b.localeCompare(a)) : Same as above sorting lexicographically

    const list = fruits.map(i => <li>{i}</li>) // rendering multiple sibling JSX elements
    // Error in console: Each child in a list should have a unique "key" prop.

    // [<li>apple</li>, <li>mango</li>, <li>banana</li>, <li>orange</li>]

    return (<ol>{list}</ol>)
}


// 2. List of Objects
function ListObject(){
    const Track =[
        {id:1, name:"apple" , cal: 95 },
        {id:2, name:"orange" , cal: 45 },
        {id:3, name:"banana" , cal: 105 },
        {id:4, name:"coconut" , cal: 159 },
        {id:5, name:"pineapple" , cal: 37 }]

    //* Sorting
    // Track.sort((a,b) => a.name.localeCompare(b.name)) // lexicographically
    // Track.sort((a,b) => b.name.localeCompare(a.name)) // Reverse lexicographically
    // Track.sort((a,b) => a.cal - b.cal ) // increasing order
    // Track.sort((a,b) => b.cal - a.cal)  // decreasing order

    // using map
    const Track_List  = Track.map(i => <li key={i.id}> {i.name}: <b>{i.cal}</b> </li>)
    //! using html inside methods is only valid for map not for others


    //using filter
    const filter = Track.filter(i => i.cal<100)
    const filter_list = filter.map(i => <li key={i.id}> {i.name}: <b>{i.cal}</b> </li>)



    return (<>
        <ol>{Track_List}</ol>
        <ol>{filter_list}</ol>
    </>)
}

// 3. Using object 

function Obj(){
    const Users = {
        101: { name: "Emma", role: "Admin" },
        102: { name: "Liam", role: "Editor" },
        103: { name: "Sophia", role: "Viewer" },
      }

    const extract = Object.values(Users).map(i => 
        <p>{i.name} - {i.role}</p>)

    return(
    <>
        <h2>User Roles</h2>
        <div>{extract}</div>
    </>)
}

export default Lists
