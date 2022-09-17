import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify';
import Icon from './Icons';
import UpdateTodoModal from './UpdateTodoModal';
import Modal from 'react-modal';

function Todo({ text, todoList, todo, setTodoList }) {
    const deleteTodo = async () => {
        const deletedTodo = await axios.delete("https://631b1a83fae3df4dcff4b59e.mockapi.io/todo/" + todo.id);
        const notify = () => toast("Todo deleted.");

        if (deletedTodo) {
            setTodoList(todoList.filter((e) => e.id !== todo.id))
            notify()
        }
    }

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '20px',
            border: 'none'
        },
    };

    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <UpdateTodoModal todoId={todo.id} todoName={todo.name} closeModal={closeModal} setTodoList={setTodoList} todoList={todoList} />
            </Modal>
            <div className='flex justify-between items-center overflow-hidden '>
                <li
                    className="text-xl w-full font-medium text-text-black px-4 truncate bg-white rounded-xl py-3"
                >
                    {text}
                </li>
                <div className='flex cursor-pointer'>
                    <button
                        onClick={openModal}
                        className="bg-g px-4 py-3.5 hover:opacity-90 rounded-xl ml-2">
                        <Icon name="update" size={24} />
                    </button>
                    <button
                        onClick={deleteTodo}
                        className="bg-r px-4 py-3.5 hover:opacity-90 rounded-xl ml-2">
                        <Icon name="delete" size={24} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todo