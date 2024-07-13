import React, { useState } from "react";

function ToDoItem(props) {
  const [isCut, setCut] = useState(false);
  function cutIt() {
    setCut(!isCut);
  }
  function generateKey(e) {
    return `${e}_${new Date().getTime()}`;
  }
  return (
    <li
      onClick={cutIt}
      key={generateKey(props.event)}
      style={{ textDecoration: isCut == true ? "line-through" : "none" }}
    >
      {props.event}
    </li>
  );
}

export default ToDoItem