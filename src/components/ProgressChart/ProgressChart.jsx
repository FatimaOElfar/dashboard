import './progresschart.css';
// import {Cell, Pie, Payrol} from "recharts";
import {Chart} from "react-google-charts";


export const ProgressChart = () => {
    // const data = [
    //     {name: 'Group A', value: 500},
    //     {name: 'Group B', value: 200},
    // ];
    // const COLORS = ['#034488', 'rgba(3, 68, 136, 0.30)'];

    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];
    // const options {
    //     colors:[
    //         {}
    //     ]
    // }
    return (
        <Chart
            chartType="PieChart"
            data={data}
            style={{width: '100%', height: '110px'}}
        />
    )
}