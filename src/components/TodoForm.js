import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Icon from './Icons'

function TodoForm() {
    const [input, setInput] = useState("")
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        getTodos();
    }, [])

    const getTodos = async () => {
        const todos = await axios.get("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo?createdUser=" + localStorage.getItem('userName'))
        setTodoList(todos.data)
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addTodo = async (e) => {
        const addedTodo = await axios.post("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo", {
            name: input,
            createdUser: localStorage.getItem('userName'),
        });

        const notify = () => toast("Todo added.");

        if (addedTodo) {
            setTodoList([...todoList, { name: input }])
            setInput("")
            notify()
        }

    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='mt-24 mb-4 w-[32%] flex items-center'>
                <input
                    className='bg-white h-12 mr-2 rounded-xl w-full px-4 font-medium text-lg focus:border-b focus:border focus:outline-none'
                    placeholder='Add to todo'
                    onChange={handleChange}
                    value={input}
                />
                <button
                    className="bg-b px-4 py-3 rounded-xl hover:opacity-90"
                    onClick={addTodo}
                >
                    <Icon name="add" size={24} />
                </button>
                <ToastContainer />
            </div>
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    )
}

export default TodoForm