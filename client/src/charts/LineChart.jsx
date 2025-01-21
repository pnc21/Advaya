import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { age: 65, alamineAminotransferase: 59 },
  { age: 62, alamineAminotransferase: 34 },
  { age: 62, alamineAminotransferase: 52 },
  { age: 58, alamineAminotransferase: 28 },
  { age: 72, alamineAminotransferase: 40 },
  { age: 55, alamineAminotransferase: 64 },
  { age: 45, alamineAminotransferase: 52 },
  { age: 60, alamineAminotransferase: 48 },
  { age: 66, alamineAminotransferase: 36 },
  { age: 50, alamineAminotransferase: 38 },
  { age: 68, alamineAminotransferase: 45 },
  { age: 59, alamineAminotransferase: 33 },
  { age: 61, alamineAminotransferase: 47 },
  { age: 57, alamineAminotransferase: 30 },
  { age: 73, alamineAminotransferase: 49 },
];

const LineCharts = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
      <YAxis label={{ value: 'Alamine Aminotransferase', angle: -90, position: 'insideLeft' }} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="alamineAminotransferase" stroke="#82ca9d" />
    </LineChart>
  </ResponsiveContainer>
);

export default LineCharts;
