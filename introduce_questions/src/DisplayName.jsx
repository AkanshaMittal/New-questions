import React, { useState } from "react";

const DisplayName=()=>{
    const[name,setName]= useState();
    const[fullName,setFullName]= useState();


    const eventHandler=(event) =>{
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit=()=>{
        setFullName(name);
    }
    return(
<>
<div>
    <h1>Name: {fullName}</h1>
    <input type="text" placeholder="Enter your Name" onChange={eventHandler} value={name}></input>
    <button onClick={onSubmit}>ClickMe</button>
    
</div>
</>

    )
}
export default DisplayName