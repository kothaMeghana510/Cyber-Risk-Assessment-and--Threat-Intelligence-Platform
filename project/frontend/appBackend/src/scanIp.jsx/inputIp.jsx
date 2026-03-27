import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../ui/loader";

function InputIP() {
    const navigate = useNavigate();
    const [ip, setIp] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleScan = async () => {
    try {
        setIsLoading(true);
        const response = await fetch('http://127.0.0.1:8000/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({target: ip})
        });

        const data = await response.json();
        console.log(data);
        setIsLoading(false)
        navigate(`/dashboard/${data.id}`);
        console.log(data.id);
        
    } catch (error) {
        console.error(error);
    }

}
    return (
        <>
            {isLoading && <Loader />}
            <div className="min-h-screen flex flex-col items-center justify-center text-lg gap-5 ">
                <h2 className="uppercase ">Enter an IP address to Scan :</h2>
                <div className="relative max-w-md mx-auto">
                    <input type='text' value={ip} onChange={(e) => setIp(e.target.value)} placeholder="Ip Address " className="rounded-lg py-3 pl-4 pr-12 w-80 bg-slate-700 focus:border-none focus:outline focus:ring-4 focus:ring-blue-400 "/>
                    <button onClick={handleScan} className="absolute right-1 top-1 transform-y-1/2 bg-indigo-500 px-5 py-2 rounded-lg">Scan</button>
                </div>
            </div>
        </>
    )
}

export default InputIP