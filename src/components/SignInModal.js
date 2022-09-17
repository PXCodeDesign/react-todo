import { useState } from "react"


function SignInModal({closeModal}) {
    
    const [userName, setUserName] = useState("");

    const setUserNameToLocalStorage= () => {
        localStorage.setItem("userName", userName);
        setUserName("");
        closeModal();
    }

    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    return (
            <div className="flex flex-col items-center  justify-center">
                <h1 className="text-3xl font-normal">Sign in</h1>
                <input
                    className='bg-white h-12 border border-b mt-8 rounded-xl w-[400px] px-4 font-medium text-lg focus:border-b focus:border focus:outline-none'
                    placeholder="Username"
                    onChange={handleChange}
                    value={userName} />
                    
                <div className="mt-8">
                    <button
                        className="border border-b px-4 py-2 rounded-xl text-b font-medium text-lg mr-2"
                        onClick={closeModal}>
                        Close
                    </button>
                    <button
                        className="bg-b  px-4 py-2 rounded-xl text-white font-medium text-lg"
                        onClick={setUserNameToLocalStorage}>
                        Sign in
                    </button>
                </div>
            </div>
    )
}

export default SignInModal