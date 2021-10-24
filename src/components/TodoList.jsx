let TodoList = ({ list, handleToggle }) => {
    return (
        <div>
            {list.map((todo, id) => (
                <p key={id}>
                    {todo.title} - {todo.status ? "Done" : "Not done"}
                    <button onClick={() => {
                        handleToggle(todo.id)
                    }}>
                        change Status
                    </button>
                    </p>
            ))}
        </div>
    )
}

export default TodoList;