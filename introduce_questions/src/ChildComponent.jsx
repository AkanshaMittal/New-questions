import React from "react";


const ChildComponent =({newmessage})=>{
    return(
       
     <button onClick={()=>newmessage("this message is from Child component")}>Button</button>
    )
}

export default ChildComponent