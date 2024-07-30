import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarGraph = ({ graph1, graph2 }) => {
  // Combine and sort the data by year
  const combinedData = graph1.map((item1, index) => {
    const item2 = graph2.find(item => item.year === item1.year);
    return {
      year: item1.year,
      employeeCount: item1.employeeCount,
      totalIncome: item2 ? item2.totalIncome : 0,
    };
  }).sort((a, b) => a.year - b.year);

  return (
    <div style={{ padding: '20px', borderRadius: '10px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)' }}>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={combinedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="year" stroke="#ccc" />
          <YAxis yAxisId="left" stroke="#ccc" />
          <YAxis yAxisId="right" orientation="right" stroke="#ccc" />
          <Tooltip contentStyle={{ backgroundColor: '#333', border: 'none' }} itemStyle={{ color: '#ccc' }} />
          <Legend />
          <Bar yAxisId="left" dataKey="employeeCount" fill="#FB923C" name="Employee Count" />
          <Bar yAxisId="right" dataKey="totalIncome" fill="#F43F5E" name="Total Income" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
