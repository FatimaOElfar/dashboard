import {Chart} from "react-google-charts"
import "./chart.css"

const Payrol = () => {
    const data = [
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
    ];
    return (
       <div className="payroll-piechart col-md-6">
            <Chart
            chartType="PieChart"
            data={data}
            // options={options}
            width={"100%"}
            height={"300px"}
            />
         </div>
    )
}
export default Payrol