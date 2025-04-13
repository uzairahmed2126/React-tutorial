import TodoItem from "./TodoItem";
import "./style.css";
function TodoApp() {
  let arr = ["eat", "code", "sleep", "repeat"];
  return (
    <div id="todo-app">
      TodoApp
      <div>
        {arr.map((item) => (
          <TodoItem text={item} key={item} />
        ))}
      </div>
      <button>Add todo</button>
    </div>
  );
}

export default TodoApp;
