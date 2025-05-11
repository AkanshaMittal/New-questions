  import React, { useEffect, useState } from "react";

export const TodoApi = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())  // Parse the response as JSON
      .then((data) => {
        setTodo(data);  // Set the fetched data to the state
      })
      
  }, []);  // Empty dependency array means it will run only once when the component mounts

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.title} <strong>Completed:</strong> {item.completed ? 'Yes' : 'No'}
          </li>
        ))}
      </ul>
    </div>
  );
};