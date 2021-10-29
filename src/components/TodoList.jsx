// import React from "react";

function TodoList({ list, handleToggle }) {
  return (
    <div>
      {list.map((todo, id) => (
        <p key={id}>
          {todo.title} - {todo.status ? "Done" : "Not Done"}
          <button
            onClick={() => {
              handleToggle(todo.id);
            }}
          >
            Statusuk
          </button>
        </p>
      ))}
    </div>
  );
}

export { TodoList };
