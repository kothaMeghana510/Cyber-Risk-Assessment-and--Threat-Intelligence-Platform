function StatsKpi({statsData}) {
    if(!statsData) {
        return
    }
    console.log(statsData)
    const {totalScans, hishRisk, mediumRisk, lowRisk, avgRiskScore,} = statsData;
    return (
        <div className="flex gap-10 justify-center p-10">
            <div className="w-45 h-full flex flex-col items-center bg-cyan-900/40 border border-cyan-500 text-cyan-300  px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Total Scans</p>
                <p className="text-3xl">{totalScans || 0 }</p>
            </div>
            <div className="w-45 h-full flex flex-col items-center bg-blue-900/40 border border-blue-500 text-blue-300 px-2 py-5 rounded-lg">
               <p className="text-md uppercase font-bold">High Risk Scans</p>
                <p className="text-3xl">{hishRisk || 0}</p>
            </div>
            <div className="w-45 h-full flex flex-col items-center bg-red-900/50 border border-red-600 text-red-400  px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Medium Risk Scans</p>
                <p className="text-3xl">{mediumRisk || 0}</p>
            </div>
            <div className="w-45 h-full flex flex-col items-center bg-yellow-900/40 border border-yellow-500 text-yellow-300 px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Low Risk Scans</p>
                <p className="text-3xl">{lowRisk || 0}</p>
            </div>
            <div className="w-45 h-full flex flex-col items-center bg-red-900/40 border border-red-500 text-red-300 px-2 py-5 rounded-lg">
                <p className="text-lg uppercase font-bold">Avg Risk Score</p>
                <p className="text-3xl">{avgRiskScore || 0}</p>
            </div>
        </div>
    )
}

export default StatsKpi