import { useContext } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
  Cell,
} from "recharts";
import { ScanContext } from "../contexts/scanContext";

function ScoreBarChart() {
  const { scanData } = useContext(ScanContext);

  if (!scanData) return null;

  const data = [
    { name: "Exposure", value: scanData.exposureScore },
    { name: "Threat", value: scanData.threatScore },
    { name: "Risk", value: scanData.riskScore },
  ];

  const colors = ["#3b82f6", "#facc15", "#ef4444"]; 
  
  return (
    <div className="w-full h-96 flex flex-col items-center gap-2 bg-slate-900 border-slate-700 p-4 rounded-2xl shadow m-5">
      <h2 className="text-xl mb-4 mt-5 uppercase font-bold">Security Score Overview</h2>

      <ResponsiveContainer>
        <BarChart data={data} barSize={60}>
          
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Bar dataKey="value" radius={[10, 10, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={index} fill={colors[index]} />
            ))}
            <LabelList dataKey="value" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default ScoreBarChart;