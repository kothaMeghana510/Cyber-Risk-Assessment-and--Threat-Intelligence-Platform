import { useContext } from "react";
import { ScanContext } from "../contexts/scanContext";
import OpenPortsPieChart from "../dashboardCharts/openPortsPiechart";

function OpenPortsSummary() {
    const { scanData } = useContext(ScanContext);
    console.log(scanData);
    if(!scanData){
        return
    }
    
    const { open_ports } = scanData;

let highRisk = 0;
let mediumRisk = 0;
let lowRisk = 0;
let unknownRisk = 0;

function calculateRiskPort(ports) {
  ports.forEach(port => {
    switch (port['risk-level']) {
      case 'HIGH':
        highRisk++;
        break;
      case 'MEDIUM':
        mediumRisk++;
        break;
      case 'LOW':
        lowRisk++;
        break;
      case 'UNKNOWN':
        unknownRisk++;
        break;
    }
  });

  return { highRisk, mediumRisk, lowRisk, unknownRisk };
}


const riskSummary = calculateRiskPort(open_ports);
console.log(riskSummary);
    return (
    <div className="flex flex-col bg-slate-800 gap-4 w-full  text-white rounded-xl p-2 shadow-md">
        <h2 className="text-lg font-bold uppercase border-b border-gray-700 pb-1">Open Ports Summary</h2>

      <div className="flex justify-center items-center  rounded-lg  shadow-inner h-100">
        <OpenPortsPieChart riskSummary={riskSummary} />
      </div>

      <div className="rounded-lg p-4 shadow-inner flex flex-col gap-2 -mt-40">
        <p><span className="font-semibold text-lg uppercase">Total Open Ports:</span> {open_ports.length}</p>
        <p><span className="font-semibold text-lg text-red-500 uppercase">Total Highest Risk Ports:</span> {riskSummary.highRisk}</p>
        <p><span className="font-semibold text-lg text-yellow-400 uppercase">Total Medium Risk Ports:</span> {riskSummary.mediumRisk}</p>
        <p><span className="font-semibold text-lg text-green-400 uppercase">Total Low Risk Ports:</span> {riskSummary.lowRisk}</p>
        <p><span className="font-semibold text-lg text-gray-400 uppercase">Total Unknown Risk Ports:</span> {riskSummary.unknownRisk}</p>
      </div>

    </div>
    )
}

export default OpenPortsSummary