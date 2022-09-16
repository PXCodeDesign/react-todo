import Todo from "./Todo"


function TodoList({ todoList, setTodoList }) { 
    debugger;
    return (        
        <ul className='w-[32%] space-y-2'>
            {todoList.map((todo) => (
                <Todo text={todo.name} key={todo.id} todo={todo} setTodoList={setTodoList} todoList={todoList} />
            ))}
        </ul>        
    )
}

export default TodoList