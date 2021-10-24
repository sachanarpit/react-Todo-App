import { useState } from "react";

import TodoInput from "./TodoItem";

import TodoList  from "./TodoList";

const Todo = () => {
    const [list, setList] = useState([]);
    const handleAdd = (todo) => {
        setList([...list , todo])
    }
    const handleToggle = (id) => {
        const updatelist = list.map((e) => {
            if (e.id === id) {
                e.status = !e.status;
            }
            return e;
        });
        setList(updatelist);
    }



    return (<div>
        <TodoInput addTodo={handleAdd} />
        <TodoList list={list} handleToggle={handleToggle} />
    </div>)
}


export default Todo;