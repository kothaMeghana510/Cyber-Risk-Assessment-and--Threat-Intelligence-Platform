import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function StatsRiskDonutChart({ statsData }) {
    if(!statsData) {
        return
    }
  const { highRisk, mediumRisk, lowRisk } = statsData;

  const data = [
    { name: "High", value: highRisk },
    { name: "Medium", value: mediumRisk },
    { name: "Low", value: lowRisk }
  ];

  const COLORS = {
    High: "#ef4444",    
    Medium: "#f59e0b",  
    Low: "#22c55e"      
  };

  return (
    <div className="w-full flex flex-col items-center gap-2 bg-slate-900 border-slate-700 rounded-3xl">
      <h2 className="text-lg font-bold uppercase">Risk Composition per IP</h2>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={70}   
          outerRadius={90}
          paddingAngle={3}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
    </div>
  );
}