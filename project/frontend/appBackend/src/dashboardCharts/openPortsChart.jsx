import { PieChart, Pie, Cell } from "recharts";

function NeedleGauge({ level }) {
  const normalized = level?.toUpperCase();
  
  const angleMap = {
    UNKNOWN: -90, 
    HIGH: 60,
    MEDIUM: 0,
    LOW: -60,
  };

  const angle = angleMap[normalized] ?? -90;

  const data = [
    { value: 33, color: "#22c55e" }, 
    { value: 33, color: "#facc15" }, 
    { value: 34, color: "#ef4444" }
  ];

  return (
    <div className="relative w-[70px] h-[50px] flex items-center justify-center">
      
      <PieChart width={70} height={50}>
        <Pie
          data={data}
          dataKey="value"
          startAngle={180}
          endAngle={0}
          cx="50%"
          cy="100%"   
          innerRadius={18}
          outerRadius={30}
          stroke="none"
          
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={entry.color} />
          ))}
        </Pie>
      </PieChart>

      <div
        className="absolute left-1/2 bottom-0 w-[2px] h-7 bg-blue-900 origin-bottom transition-all duration-500"
        style={{
          transform: `rotate(${angle}deg) translateX(-50%)`,
        }}
      />

      <div className="absolute left-1/2 bottom-0 w-2 h-2 bg-gray-800 rounded-full transform -translate-x-1/2" />
    </div>
  );
}

export default NeedleGauge;