import { useState } from "react"
import axios from "axios"
import { toast } from 'react-toastify';

function UpdateTodoModal({ todoName, todoId, closeModal, setTodoList, todoList }) {

    const [name, setName] = useState(todoName);

    const updateTodo = async () => {
        const updatedTodo = await axios.put("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo/" + todoId, {
            name: name,
        });
        const notify = () => toast("Todo updated.");

        if (updatedTodo) {
            notify()
            closeModal();
            const updatedTodoList = todoList.map(obj => {
                if (obj.id === todoId) {
                    return { ...obj, name: name };
                }
                return obj;
            })
            setTodoList(updatedTodoList)
        }
    }

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className="flex flex-col items-center  justify-center">
            <h1 className="text-3xl font-normal">Update</h1>
            <input
                className='bg-white h-12 border border-b mt-8 rounded-xl w-[400px] px-4 font-medium text-lg focus:border-b focus:border focus:outline-none'
                placeholder="Name"
                onChange={handleChange}
                value={name} />

            <div className="mt-8">
                <button
                    className="border border-b px-4 py-2 rounded-xl text-b font-medium text-lg mr-2"
                    onClick={closeModal}>
                    Close
                </button>
                <button
                    className="bg-b  px-4 py-2 rounded-xl text-white font-medium text-lg"
                    onClick={updateTodo}>
                    Update
                </button>
            </div>
        </div>
    )
}

export default UpdateTodoModal