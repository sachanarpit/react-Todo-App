import React from "react";
import { nanoid } from "nanoid";

function TodoInput({ addTodo }) {
  const [text, setText] = React.useState("");

  const handleChange = ({ target }) => {
    setText(target.value);
  };
  const handleAdd = () => {
    const data = {
      id: nanoid(7),
      title: text,
      status: false,
    };
    addTodo(data);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Todo"
        value={text}
        onChange={handleChange}
      ></input>
      <button onClick={handleAdd}>Add Todo</button>
    </>
  );
}

export { TodoInput };
