import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

export default function IpMetricsStackedChart({ statsData }) {
    if(!statsData) {
        return
    }
  const { ipRiskData } = statsData;

  const transformData = (ipRiskData) => {
    const result = {};

    ipRiskData.forEach(({ ip, riskScore, threatScore, exposureScore }) => {
      if (!result[ip]) {
        result[ip] = {
          ip,
          riskScore: 0,
          threatScore: 0,
          exposureScore: 0,
          count: 0
        };
      }

      result[ip].riskScore += riskScore;
      result[ip].threatScore += threatScore;
      result[ip].exposureScore += exposureScore;
      result[ip].count += 1;
    });

    return Object.values(result).map((item) => ({
      ip: item.ip,
      riskScore: item.riskScore / item.count,
      threatScore: item.threatScore / item.count,
      exposureScore: item.exposureScore / item.count
    }));
  };

  const data = transformData(ipRiskData || []);

  return (
    <ResponsiveContainer width="60%" height={320}>
      <BarChart data={data}>
        <XAxis dataKey="ip" stroke="#9ca3af" />
        <YAxis stroke="#9ca3af" />
        <Tooltip />
        <Legend />

        <Bar dataKey="riskScore" stackId="a" fill="#ef4444" barSize={50}  />

        <Bar dataKey="threatScore" stackId="a" fill="#f59e0b"barSize={50} />

        <Bar dataKey="exposureScore" stackId="a" fill="#22c55e" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
}