import { useContext } from "react"
import { ScanContext } from "../contexts/scanContext"
import EmptyDashboard from "./emptyDashboard";


function KpiCards() {
    const { scanData } = useContext(ScanContext);

    if (!scanData) {
        return <EmptyDashboard />
    }
    const {totalOpenPorts,exposureScore, malicious, suspicious, threatScore, riskScore} = scanData
    return (
        <div className="flex gap-10 justify-center p-10">
            <div className="w-40 h-full flex flex-col items-center bg-cyan-900/40 border border-cyan-500 text-cyan-300  px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Open Ports</p>
                <p className="text-3xl">{totalOpenPorts}</p>
            </div>
            <div className="w-40 h-full flex flex-col items-center bg-blue-900/40 border border-blue-500 text-blue-300 px-2 py-5 rounded-lg">
                <p className="text-md uppercase font-bold">Exposure Score</p>
                <p className="text-3xl">{exposureScore}</p>
            </div>
            <div className="w-40 h-full flex flex-col items-center bg-red-900/50 border border-red-600 text-red-400  px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Malicious</p>
                <p className="text-3xl">{malicious}</p>
            </div>
            <div className="w-40 h-full flex flex-col items-center bg-yellow-900/40 border border-yellow-500 text-yellow-300 px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Suspicious</p>
                <p className="text-3xl">{suspicious}</p>
            </div>
            <div className="w-40 h-full flex flex-col items-center bg-red-900/40 border border-red-500 text-red-300 px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">ThreatScore</p>
                <p className="text-3xl">{threatScore}</p>
            </div>
            <div className="w-40 h-full flex flex-col items-center bg-orange-900/40 border border-orange-500 text-orange-300 px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Risk Score</p>
                <p className="text-3xl">{riskScore}</p>
            </div>
        </div>
    )
}

export default KpiCards