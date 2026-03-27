import { RadialBarChart, RadialBar, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function OpenPortsRadialBar({ riskSummary }) {
  const data = [
    { name: 'High', value: riskSummary?.highRisk || 0, fill: '#FF4D4F' },
    { name: 'Medium', value: riskSummary?.mediumRisk || 0, fill: '#FA8C16' },
    { name: 'Low', value: riskSummary?.lowRisk || 0, fill: '#52C41A' },
    { name: 'Unknown', value: riskSummary?.unknownRisk || 0, fill: '#595959' },
  ];

  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <RadialBarChart
          cx="40%"
          cy="30%"
          innerRadius="5%"
          outerRadius="60%"
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={10}
            background
            clockWise
            dataKey="value"
            label={{
              position: 'insideEnd',
              fill: '#fff', 
              formatter: (value) => value, 
            }}
          />
          <Tooltip />
          <Legend iconSize={10} layout="horizantal" verticalAlign="top" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}