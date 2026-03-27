function Loader() {
    return (
        <>
        <div className=" relative h-screen flex gap-3 justify-center items-center">
            <div className="w-8 h-8 bg-indigo-500 rounded-full animate-bounce"></div>
            <div className="w-8 h-8 bg-indigo-500 rounded-full animate-bounce delay-200"></div>
            <div className="w-8 h-8 bg-indigo-500 rounded-full animate-bounce delay-400"></div>
        </div>
        </>
    )
}

export default Loader