//* In React, form elements are usually controlled components — their values are managed by useState.

//! onChange = event handler used primarily with below form elements only
//* ‹input› (with types: text, email, etc..) , ‹textarea›, ‹select>

//! Triggers a function every time the value of the input changes

//* Doesn’t work with:
// <button> → Use "onClick" instead
// <form> → Use "onSubmit" for handling form submission
// <label> → Doesn't use onChange
// <fieldset>, <legend> → Structural part, so no use

//* ❗ Common Mistakes
// ❌ Not binding the input with state (value={...}).
// ❌ Not passing the event (e/event) to the handler.
// ❌ Using defaultValue (Html) and onChange together.


import React, {useState}  from 'react'

function Change(){
    const [name,setName] = useState("") 
    const [qty, setQty] = useState(1)
    const [comment, setComment] = useState("")
    const [pay, setPay] = useState("")
    const [shipment, setShipment] = useState("Delivery")

    
    //* Real time change in variable
    const NameHandle = (event) => {
        setName(event.target.value)
    }

    const QtyHandle = (event) => {
        setQty(event.target.value) 
    }

    const CommentHandle = (event) => {
        setComment(event.target.value) 
    }

    const PayHandle = (event) => {
        setPay(event.target.value) 
    }

    const ShipmentHandle = (event) => {
        setShipment(event.target.value)
    }
    

    return (<div style = {{border: "2px solid black", height: "auto", width: "100%", padding: "10px", margin:"20px"}}>
        
        {/* Input */}
        <input value ={name} onChange={NameHandle}/>
        <p>NAME: {name}</p>

        <input value={qty} onChange={QtyHandle} type='number'/>
        <p>Quantity: {qty}</p>


        {/* Input: Radio */}
        <label>
            <input type="radio" value="Pick Up" checked={shipment === "Pick Up"} onChange={ShipmentHandle}/>
            Pick up
        </label>
        <label>
            <input type="radio" value="Delivery" checked={shipment === "Delivery"} onChange={ShipmentHandle} />
            Delivery
        </label>

        <p>Shipment: {shipment}</p>


        {/* TextArea */}
        <textarea value={comment} onChange={CommentHandle} placeholder='Enter delivery instructions'/>
        <p>Instructions: {comment}</p>


        {/* Select */}
        <select value={pay} onChange={PayHandle}>
            <option value="" >Select Payment method</option>
            <option value="UPI" >UPI</option>
            <option value="Wallets" >Wallets</option>
            <option value="Bank Transfer" >Bank Transfer</option>
            <option value="Gift Card" >Gift Card</option>
            <option value="Cash on Delivery" >Cash on Delivery</option>
        </select>

        <p>Pay Method: {pay}</p>

    </div> )
}

export default Change