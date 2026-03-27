import { useContext } from "react"
import { ScanContext } from "../contexts/scanContext"
import { HiOutlineClipboardCheck } from "react-icons/hi";

function Summary() {
    const {scanData} = useContext(ScanContext);
    if(!scanData) {
        return
    }
    const {ip, riskLevel, open_ports: openPorts} = scanData;
    let bgClass = '';
    if(riskLevel === 'Medium') bgClass = 'bg-orange-900/40 border-orange-500';
    else if(riskLevel === 'High') bgClass = 'bg-red-900/40 border-red-500';
    else if(riskLevel === 'Low') bgClass = 'bg-green-900/40 border-green-500';

   function highestRiskPort(ports) {
        if (!ports || ports.length === 0) return null;

        let port = ports.find(p => p['risk-level'] === 'HIGH');
        if (port) return port;

        port = ports.find(p => p['risk-level'] === 'MEDIUM');
        if (port) return port;

        port = ports.find(p => p['risk-level'] === 'LOW');
        if (port) return port;

        return ports[0];
    }
    const topPort = highestRiskPort(openPorts);
    return (
        <div className={`${bgClass} rounded-md border-2 w-2/3 p-10 text-lg flex flex-col gap-2`}>
             <div className="flex gap-2 justify-center items-center mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center"><HiOutlineClipboardCheck /></h2>
                    <h2 className="text-2xl font-bold mb-4 text-center">Quick Summary</h2>
            </div>
            <p><span className="font-semibold">Trageted IP :</span> {ip}</p>
            <p><span className="font-semibold">Overall Risk Level :</span> {riskLevel}</p>
            {topPort && (
            <p>
                <span className="font-semibold">Highest Risk Port:</span> {topPort.port} ({topPort.service}) - {topPort['risk-level']}
            </p>
      )}
        </div>
    )
}

export default Summary