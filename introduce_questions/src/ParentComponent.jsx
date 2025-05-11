import React, { useState } from "react"
import ChildComponent from "./ChildComponent";
  const ParentComponent=()=>{

   const[message,setMessage]= useState("this message is from parent component");
 const update=(newmessage)=>{
     setMessage(newmessage);
   }
    return(
      <>
      <div ></div>
      <h1>{message}</h1><br/>
     <ChildComponent newmessage={update}/>
      </>
      
    )
  }
  export default ParentComponent