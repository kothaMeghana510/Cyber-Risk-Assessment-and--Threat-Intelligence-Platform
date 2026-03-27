import { useEffect, useState } from "react"
import HistoryTable from "./historyTable";
import EmptyHistory from "../ui/emptyHistory";

function FetchScans() {
    const [scanHistory, setScanHistory] = useState();
    console.log(scanHistory)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://127.0.0.1:8000/allScans`);

                const data =await response.json();
                setScanHistory(data);
                
            }catch(error){
                console.error('Something Went Wrong', error)
            }
        }
        fetchData();
    }, []);

    const handleDelete = async (scanId) => {
        try {
        const response = await fetch(`http://127.0.0.1:8000/scan/${scanId}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json'},
        });
         if (response.ok) {
           
            setScanHistory(prev => prev.filter(scan => scan.id !== scanId));
        } else {
            console.error("Failed to delete scan");
        }
    }catch(error) {
        console.error('SomethingWent Wrong', error)
    }
    }

    if(!scanHistory) {
        return
    }

    return (
        <div className="p-5 rounded-lg shadow-md max-w-6xl mx-auto">
            {Array.isArray(scanHistory) && scanHistory.length > 0 ? <HistoryTable scanHistory={scanHistory} handleDelete={handleDelete} /> : <EmptyHistory />}
        </div>
    )
}

export default FetchScans