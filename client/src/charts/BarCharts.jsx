import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { metric: 'Total Bilirubin', value: 1.0 },
  { metric: 'Direct Bilirubin', value: 0.4 },
  { metric: 'Alkaline Phosphotase', value: 291 },
  { metric: 'Alamine Aminotransferase', value: 59 },
  { metric: 'Aspartate Aminotransferase', value: 68 },
  { metric: 'Total Proteins', value: 6.5 },
  { metric: 'Albumin', value: 4.1 },
  { metric: 'Albumin and Globulin Ratio', value: 1.2 },
];

const BarCharts = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="metric" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default BarCharts;
