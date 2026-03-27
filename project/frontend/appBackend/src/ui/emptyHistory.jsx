import { useNavigate } from "react-router-dom"

function EmptyHistory() {
    const navigate = useNavigate()
    return (
            <div className="flex flex-col gap-3 items-center">
            <p className="text-lg">Nothing In History</p>
            <p>Scan an Ip to see the Results</p>
            <button onClick={() => navigate('/')} className="bg-blue-500 px-2 py-2 rounded-md font-semibold">Go to Scan</button>
            </div>
    )
}

export default EmptyHistory