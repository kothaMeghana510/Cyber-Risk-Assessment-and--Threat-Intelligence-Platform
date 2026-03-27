import { useContext } from "react";
import { ScanContext } from "../contexts/scanContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#ef4444", "#facc15", "#22c55e"];

function RiskPieChart() {
    const { scanData } = useContext(ScanContext);
    if(!scanData) {
        return
    }

    const data = [
        { name: "Malicious", value: scanData.malicious },
        { name: "Suspicious", value: scanData.suspicious },
        { name: "Harmless", value: scanData.harmless },
    ]
   
   return (
    <div className="rounded-2xl shadow-lg w-full flex flex-col items-center bg-slate-900 border-slate-700 m-6">
      <h2 className="text-xl mb-4 mt-5 uppercase font-bold">Threat Analysis</h2>

      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={90}   
          outerRadius={110}
          paddingAngle={5}   
          dataKey="value"
          cornerRadius={10}  
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default RiskPieChart;