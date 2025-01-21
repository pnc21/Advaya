import React from 'react';
import LineCharts from './charts/LineChart';
import PieCharts from './charts/PieChart';
import BarCharts from '././charts/BarCharts'

const Charts = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px', margin: '20px' }}>
            <div>
                <h2>Line Chart</h2>
                <LineCharts />

            </div>
            <div>
                <h2>Bar Chart</h2>
                <BarCharts />

            </div>
            {/* <div>
                <h2>Pie Chart</h2>
                <PieCharts />
            </div> */}
        </div>
    );
};

export default Charts;
