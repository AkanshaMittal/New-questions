import React, { useState } from "react";

const DisplayListofName = () => {
    const [name, setName] = useState("");      
    const [namesList, setNamesList] = useState([]);  // State to store the list of names

    const InputEvents = (event) => {
        console.log(event.target.value);
        setName(event.target.value);    // Update the name state as user types
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (name) {
            setNamesList([...namesList, name]);   // Add new name to the list
            setName("");  // Clear the input field after submitting
        }
    }

    return (
        <>
            <div>
                <h1>Names List</h1>
                <input 
                    type="text" 
                    placeholder="Enter your Name" 
                    onChange={InputEvents} 
                    value={name} 
                />
                <button onClick={onSubmit}>ClickMe</button>

                {/* Displaying the list of names */}
                <ul>
                    {namesList.map((name, index) => (
                        <li key={index}>{name}</li> 
                    ))}
                </ul>
            </div>
        </>
    );
};

export default DisplayListofName ;