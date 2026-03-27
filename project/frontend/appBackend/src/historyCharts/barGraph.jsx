import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";

export default function RiskBarChart({ statsData }) {
    if(!statsData) {
        return
    }
  const { highRisk, mediumRisk, lowRisk } = statsData;

  const data = [
    { name: "High", value: highRisk },
    { name: "Medium", value: mediumRisk },
    { name: "Low", value: lowRisk }
  ];

  const colors = {
    High: "#ef4444",    
    Medium: "#f59e0b",  
    Low: "#22c55e"      
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 bg-slate-900 border-slate-700 rounded-3xl">
      <h2 className="text-lg font-bold uppercase">Scan Risk Level Comparison</h2>
    <ResponsiveContainer width="65%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip />

        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[entry.name]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
    </div>
  );
}