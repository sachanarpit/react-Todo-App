import { useState } from "react";
import { nanoid } from "nanoid";

const TodoInput = ({ addTodo }) => {
    const [text, setText] = useState("");

    let handleText = ({ target }) => {
        setText(target.value)      
    }

    let handleAdd = () => {
        const data = {
            id: nanoid(4),
            title: text,
            status: false
        };
        addTodo(data);
    }

    return (
        <>
            <input type="text" placeholder="type your task" onChange={handleText} value={text} />
            <button onClick={handleAdd}>Add Todo</button>
        </>
    )
}

export default TodoInput;