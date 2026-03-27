import { HiOutlineTrash } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function HistoryTable({scanHistory, handleDelete}) {
  const navigate = useNavigate();
    return (
        <>
        <p className="text-lg font-semibold mb-4">Total Scans Performed: <span className="text-blue-700">{scanHistory.length}</span></p>
        <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-blue-200 rounded-lg">
        <thead className="bg-blue-500 text-white">
        <tr>
          <th className="py-2 px-4 text-left">Target</th>
          <th className="py-2 px-4 text-left">Exposure Score</th>
          <th className="py-2 px-4 text-left">Threat Score</th>
          <th className="py-2 px-4 text-left">Risk Level</th>
          <th className="py-2 px-4 text-left">Time Stamp</th>
          <th className="py-2 px-4 text-left">Results</th>
          <th>Remove Scan</th>
        </tr>
      </thead>
      <tbody>
        {scanHistory.map((scan) => {
          let riskColor = "";
          if (scan.riskLevel === "High") riskColor = "text-red-300 bg-red-600 font-semibold rounded-md";
          else if (scan.riskLevel === "Medium") riskColor = "text-yellow-300 font-semibold bg-yellow-600 rounded-md";
          else if (scan.riskLevel === "Low") riskColor = "text-green-300 bg-green-600  font-semibold rounded-md";
          else riskColor = "text-gray-600 font-medium";

          let bgClass = '';
          if(scan.riskLevel === "High") bgClass = 'bg-red-900/50';
          else if(scan.riskLevel === "Medium") bgClass = 'bg-orange-600/30';
          else if(scan.riskLevel === "Low") bgClass = 'bg-green-900/50';

          return (
            <tr key={scan.id} className={`${bgClass} hover:bg-blue-100  hover:text-black transition-colors border-b-2`}>
              <td className={`py-4 px-4`}>{scan.ip}</td>
              <td className="py-4 px-4">{scan.exposureScore}</td>
              <td className="py-4 px-4">{scan.threatScore}</td>
              <td className="py-4 px-4"><span className={`px-1 py-1 ${riskColor}`}>{scan.riskLevel}</span></td>
              <td className="py-4 px-4">{new Date(scan.scan_time).toLocaleString()}</td>
              <td><button onClick={() => navigate(`/dashboard/${scan.id}`)} className="px-4 py-4"><span className={'px-1 py-1 bg-blue-500 rounded-md font-semibold'}>See Results</span></button></td>
              <td className="py-4 px-4"><button onClick={() => handleDelete(scan.id)}><HiOutlineTrash style = {{fontSize: '20px', marginLeft: '25px'}} /></button></td>
        </tr>
          );
        })} 
      </tbody>
    </table>
  </div>
  </>
    )
}

export default HistoryTable;