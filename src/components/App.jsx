import React, { useState } from "react";
import ToDoItem from "./todoListItem.jsx";
import InputArea from "./inputArea.jsx";

function App() {
  const [items, setItems] = useState([]);
  
  function addItem(inputText) {
    setItems(() => {
      return [...items, inputText];
    });
  }
  function deleteItem(itemId){
    setItems(()=>{
        return items.filter((i,index) => index!=itemId);
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        onAdd={addItem}  
      />
      <div>
        <ul>
          {items.map((e,index) => (
            <ToDoItem
                onChecked={deleteItem} key={index} event={e} id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App