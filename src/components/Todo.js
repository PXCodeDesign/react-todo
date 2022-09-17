import React from 'react'
import axios from "axios"

function Todo({ text, todoList, todo, setTodoList }) {
    const deleteTodo = async () => {
        const deletedTodo = await axios.delete("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo/" + todo.id);

        if (deletedTodo) {
            setTodoList(todoList.filter((e) => e.id !== todo.id))
            setSpinner(true);
        }
    }


    return (
        <div className='flex justify-between items-center overflow-hidden bg-white rounded-xl'>
            <li
                className={"text-xl font-medium text-text-black px-4 truncate"}
            >
                {text}
            </li>
            <div className='flex cursor-pointer'>
                <button
                    onClick={deleteTodo}
                    className="bg-r px-4 py-2 text-white font-medium text-lg hover:opacity-90">
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Todo