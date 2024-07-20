import React, { useState } from "react";

function ToDoItem(props) {
  const [isCut, setCut] = useState(false);
  function cutIt() {
    setCut(!isCut);
  }
//   function generateKey(e) {
//     return `${e}_${new Date().getTime()}`;
//   }
  return (
    <li
    //   onClick={cutIt}
      style={{ textDecoration: isCut == true ? "line-through" : "none" }}
      onClick={()=>{
        props.onChecked(props.id);
      }}

    >
      {props.event}
    </li>
  );
}

export default ToDoItem