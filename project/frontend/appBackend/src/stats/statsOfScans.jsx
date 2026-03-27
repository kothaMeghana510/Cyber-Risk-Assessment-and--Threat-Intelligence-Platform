import { useEffect, useState } from "react"
import StatsKpi from "./statsKpi";
import RiskBarChart from "../historyCharts/barGraph";
import StatsRiskDonutChart from "../historyCharts/statsDonutChart";
import IpRiskStackedChart from "../historyCharts/ipRiskStackGraph";


function ScanStats() {
    const [statsData, setStatsData] = useState();
    useEffect(() => {
        async function fetchStatsData() {
            try {
                const response = await fetch(`http://127.0.0.1:8000/stats`);
                const data = await response.json();
                setStatsData(data);
            }catch(error) {
            console.log('Something Went wrong!');
            }
        }
        fetchStatsData();
    }, []);
    return (
        <div>
            <StatsKpi statsData={statsData} />
            <div className="flex gap-5 p-5">
                <RiskBarChart statsData={statsData}/>
                <StatsRiskDonutChart statsData={statsData} />
            </div>
            <div className="flex flex-col items-center gap-3 bg-slate-900 border-slate-700 rounded-3xl m-10">
                <h2 className="text-lg font-bold uppercase">Risk Composition per IP</h2>
                <IpRiskStackedChart statsData={statsData} />
            </div>
        </div>
    )
}

export default ScanStats