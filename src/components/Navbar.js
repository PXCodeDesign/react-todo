




function Navbar({ openModal }) {

    const getUserName = () => {
        return localStorage.getItem("userName");
    }

    return (
        <div className="flex justify-center items-center bg-white py-6 fixed w-full overflow-hidden">
            <h1 className="text-3xl tracking-[25px] text-b font-bold">TODO</h1>
            <div className="inset-y-4 right-8 absolute">
                {getUserName() ? <p className="text-xl font-normal tracking-[2px] border border-b px-4 py-2 rounded-xl text-b">{`Hoşgeldin ${getUserName()}`}</p> :
                    <button onClick={openModal}
                        className="bg-b px-4 py-2 rounded-xl text-white font-medium text-lg  ">
                        Sign in
                    </button>}
            </div>
        </div>

    )
}

export default Navbar
