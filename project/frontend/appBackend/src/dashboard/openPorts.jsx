import { useContext } from "react"
import { ScanContext } from "../contexts/scanContext"
import NeedleGauge from "../dashboardCharts/openPortsChart";
import { HiLockOpen } from "react-icons/hi";


function OpenPorts() {
    const { scanData } = useContext(ScanContext);
    console.log(scanData);
    if(!scanData){
        return
    }
    const {open_ports} = scanData;
    if(open_ports.length === 0) {
        return 'No open Ports'
    }
    console.log(open_ports);
    return (
        <div className="w-full">
            <div className="flex gap-2 justify-center">
                <h2 className="text-2xl font-bold mb-4 text-center"><HiLockOpen /></h2>
                <h2 className="text-2xl font-bold mb-4 text-center">Open Ports</h2>
            </div>
            <table className="w-full  max-w-3xl table-auto mx-auto  border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-5 text-left">Port</th>
                        <th className="py-3 px-5 text-left">Service</th>
                        <th className="py-3 px-5 text-left">Risk Level</th>
                        <th className="py-3 px-5 text-left">Risk Indicator</th>
                    </tr>
                </thead>
                <tbody>
                    {open_ports.map((port) => {
                        let bgClass = '';
                        if (port['risk-level'] === 'HIGH') bgClass = 'bg-red-500 text-red-800';
                        else if (port['risk-level'] === 'MEDIUM') bgClass = 'bg-yellow-500 text-yellow-800 font-bold ';
                        else if (port['risk-level'] === 'LOW') bgClass = 'bg-green-500 text-green-800';
                        else if (port['risk-level'] === 'UNKNOWN') bgClass = 'bg-gray-500 text-gray-800';


                        return(
                            <tr key={port.port} className=" border-b">
                            <td className="py-2 px-4">{port.port}</td>
                            <td className="py-2 px-4">{port.service}</td>
                            <td className="py-2 px-4">
                                <span className={`inline-block ${bgClass}  px-2 py-1 rounded-md font-semibold`}>
                                    {port['risk-level']}
                                </span></td>
                                <td>
                                    <NeedleGauge level={port['risk-level']}/>
                                </td>
                        </tr>
                        )
})}
                </tbody>
            </table>
        </div>
    )
}

export default OpenPorts