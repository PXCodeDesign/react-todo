import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import axios from "axios"


async function getData() {
    const todos = await axios("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo")
    console.log(todos.data)
}
getData()

function TodoForm() {
    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        getTodos();
        //getTodoLocal()
    }, [])

    useEffect(() => {
        todoLocal()
    })

    const getTodos = async () => {
        const todos = await axios.get("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo");
        setTodoList(todos.data);
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addTodo = async (e) => {
        const addedTodo = await axios.post("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo", {
            name: input,
            createdUser: "ates",
        });

        if (addedTodo) {
            setTodoList([...todoList, { name: input }])
            setInput("")
        }
    }

    const todoLocal = () => {
        localStorage.setItem("todoList", JSON.stringify(todoList))
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-24 mb-4 w-[32%]'>
                <input
                    className='bg-white h-12 mr-5 rounded-xl w-[400px] px-4 font-medium text-lg focus:border-b focus:border focus:outline-none'
                    placeholder='Add to todo'
                    onChange={handleChange}
                    value={input}
                />
                <button
                    className="bg-b px-4 py-2 rounded-xl text-white font-medium text-lg mr-5"
                    onClick={addTodo}
                >
                    Add
                </button>
            </div>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}

export default TodoForm