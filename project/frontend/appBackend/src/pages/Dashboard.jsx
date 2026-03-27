import NavLinks from "../navigation/navLinks"
import KpiCards from "../dashboard/kpiCards";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ScanContext } from "../contexts/scanContext";
import EmptyDashboard from "../dashboard/emptyDashboard";
import OpenPorts from "../dashboard/openPorts";
import RiskPieChart from "../dashboardCharts/vulnScore";
import VtScores from "../dashboardCharts/barGraph";
import Summary from "../dashboard/summary";
import AnalysisHeading from "../dashboard/analysisHeading";
import OpenPortsSummary from "../dashboard/openPortSummary";


function Dashboard() {
    const {id} = useParams();
    const {scanData, setScanData } = useContext(ScanContext);
    useEffect(() => {
        if(!id) return;
        async function fetchScanData() {
            try {
            const response = await fetch(`http://127.0.0.1:8000/scan/${id}`);
             if (!response.ok) throw new Error("Failed");

            const data = await response.json();
            setScanData(data);
        }catch(error) {
            console.log(error);
        }
        }
        fetchScanData();
    }, [id])

    if(!id) {
        return <EmptyDashboard />
    }
    return (
        <>
        <div>
            <NavLinks />
            <div>
                <h3 className="flex justify-center py-5 text-lg">Target IP Address = {scanData?.ip}</h3>
                <section>
                    <KpiCards />
                    <div className="flex flex-col items-center">
                        <Summary />
                    </div>
                </section>
                <section>
                    <AnalysisHeading />
                    <div className="flex gap-4 justify-center items-center pb-9 pt-2">
                        <RiskPieChart />
                        <VtScores />
                    </div>
                    <div className="flex gap-4 w-full p-10 justify-center">
                     <OpenPorts />
                     <OpenPortsSummary />
                   </div>
                </section>
            </div>
        </div>
        </>
    )
}

export default Dashboard