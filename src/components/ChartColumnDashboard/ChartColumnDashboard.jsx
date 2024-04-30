import './chartcolumndashboard.css'
// import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
// import {useState} from 'react';
import {Chart} from "react-google-charts";


export const ChartColumnDashboard = () => {
    const data = [
        ["Year", "On Time", "Late Arrival", "Absent"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
    ];
    const options = {
        chart: {
            title: "Attendance",
            style: {
                color: '#000'
            }
        },
    };
    return (
        <div>
            <Chart
                chartType="Bar"
                width="100%"
                height="300px"
                data={data}
                legendToggle
                options={options}
            />
        </div>
    )
}