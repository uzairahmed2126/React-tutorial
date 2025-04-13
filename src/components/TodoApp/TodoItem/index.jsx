import React from "react";
import "./style.css";
function TodoItem({ text }) {
  return (
    <div id="todo-item">
      <span>
        <input type="checkbox" />
        {text}
      </span>
      <div id="opt-main">
        <span id="opt">...</span>
      </div>
    </div>
  );
}

export default TodoItem;
