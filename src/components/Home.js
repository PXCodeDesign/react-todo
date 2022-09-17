
import { useState } from "react";
import Navbar from "./Navbar"
import TodoForm from "./TodoForm"
import Modal from 'react-modal';
import SignInModal from "./SignInModal";

function Home() {
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
            <SignInModal closeModal={closeModal} />
        </Modal>
            
            <Navbar openModal={openModal} />
            <TodoForm />
        </>
    )
}

export default Home