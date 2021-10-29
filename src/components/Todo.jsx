import React from "react";
import { TodoInput } from "./TodoItem";
import { TodoList } from "./TodoList";

function Todo({ todoList }) {
  const [list, setList] = React.useState([]);

  const handleAdd = (todo) => {
    setList([...list, todo]);
  };
  const handleToggle = (id) => {
    const updatelist = list.map((e) => {
      if (e.id === id) {
        e.status = !e.status;
      }
      return e;
    });
    setList(updatelist);
  };
  return (
    <div>
      <h1>todo app</h1>
      <TodoInput addTodo={handleAdd}></TodoInput>
      <TodoList list={list} handleToggle={handleToggle}></TodoList>
    </div>
  );
}
export default Todo;
