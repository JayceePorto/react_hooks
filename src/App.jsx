/*import React, { useState } from 'react';
import './App.css';



function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {

    if (!newItem) {
      alert("Enter an item.");
      return;
    }
  }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem
  };

  setItems(oldList => [...oldList, item]);
  setNewItem("");

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  

  return (
    <div className="App">

      <h1>Tasks</h1>

      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        />

        <button onLCick={() => addItem()}>Add</button>

        <ul>
          {items.map(item => {
            return(
              <li key={item.id}>{item.value} <button onClick={() => deleteItem(item.id)}>Delete</button></li>
            )
          })}
        </ul>
    </div>
  );
}
export default App;*/


import React, { useState, useEffect } from "react";
import Overview from "./Components/Overview.jsx";


const App = () => {
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    const value = document.getElementById("taskInput").value;

    const newtasks = tasks.push({
      content: value,
      done: false,
    });

    setTasks(newtasks);
  };

  const handleTaskDoneToggle = (id) => {
    const updatedTasks = tasks.map((value, index) => {
      if( id === index + value.content) {
        value.done = !value.done;
      }
      return value;
    });

    setTasks(updatedTasks);
  };

  const handleResetTaskList = () => {
    setTasks([]);
  };

  useEffect(() => {
    console.log("Updated");
  })
    return (
      <main className="container text-center">
        <h1>React Hooks</h1>
        <section>
          <h3>Add a task:</h3>
          <input type="text" id="taskInput" placeHolder="To do..." />
          <button onClick={handleClick}>Add</button>
        </section>
        <Overview 
          tasks={tasks} 
          handleTaskDoneToggle={handleTaskDoneToggle}
          handleResetTaskList={handleResetTaskList}/>
      </main>
    )
  }


export default App;