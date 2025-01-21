import React from 'react';
import {
  BarChart, Bar, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// Sample data based on the dataset
const data = [
  { age: 65, bilirubin: 0.7, protein: 6.8, outcome: 1 },
  { age: 62, bilirubin: 10.9, protein: 7.5, outcome: 1 },
  { age: 62, bilirubin: 7.3, protein: 7.0, outcome: 1 },
  { age: 58, bilirubin: 1.0, protein: 6.8, outcome: 1 },
  { age: 72, bilirubin: 3.9, protein: 7.3, outcome: 1 },
  { age: 55, bilirubin: 8.1, protein: 6.9, outcome: 2 },
  { age: 45, bilirubin: 1.2, protein: 7.1, outcome: 2 },
  { age: 60, bilirubin: 0.9, protein: 6.6, outcome: 2 },
  { age: 66, bilirubin: 2.5, protein: 6.8, outcome: 2 },
  { age: 50, bilirubin: 3.1, protein: 7.2, outcome: 2 }
];

const SymptomCheckerCharts = () => {
  return (
    <div>
      <h3>Symptom Checker Visualization</h3>

      {/* Bar Chart */}
      <h4>Bilirubin vs Age</h4>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
          <YAxis label={{ value: 'Bilirubin', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="bilirubin" fill="#8884d8" name="Bilirubin" />
        </BarChart>
      </ResponsiveContainer>

      {/* Scatter Chart */}
      <h4>Protein Levels vs Age</h4>
      <ResponsiveContainer width="100%" height={300}>
        <ScatterChart
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="age" name="Age" />
          <YAxis type="number" dataKey="protein" name="Protein" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="Protein Levels" data={data} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SymptomCheckerCharts;
