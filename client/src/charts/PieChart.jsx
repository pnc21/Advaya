import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Male', value: 167 },
  { name: 'Female', value: 89 },
  { name: 'Other', value: 10 }, // You can add a third category like "Other" if applicable
];

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

const PieCharts = () => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default PieCharts;
