 import "./chart.css"
 import {BsDot} from "react-icons/Bs";
 import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
  } from "recharts";
  
   function Chart({ data }) {

    
    return (
      <div className="payroll">

    <div className="payroll-chart">
      <div className="payroll-data">
        <h1>Payroll Summary</h1>
        <div className="payroll-info">
          <ul>
            <li><BsDot  style={{ fill: '#034488'  }}  className="payroll-Dot"  /> Gloss</li>
            <li><BsDot style={{ fill: '#00E096' }}    className="payroll-Dot "/>Taxes</li>
            <li><BsDot  style={{ fill: '#44C5E2' }}   className="payroll-Dot" />Net Salary</li>
            <button className="but-payroll" >Yearly <KeyboardArrowDownIcon className="icon-payroll"/></button>
          </ul>
        </div>
      </div>

<ResponsiveContainer width="100%" height={300} style={{ marginLeft: '-3%' }}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          } }
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis style={{ marginLeft: '-3%' }}/>
          <Tooltip />
          <Legend />

          {/* <Bar dataKey="gross"  fill="#8884d8" />
           <Bar dataKey="taxes" fill="#82ca9d" />
           <Bar dataKey="netSalary" fill="#ffc658" />   */}
          {/* <Bar dataKey="name" fill="#8884d8" /> */}
          <Bar dataKey="priceUsd" fill="#034488" style={{height:"300px"}} />
          <Bar dataKey="priceUsd" fill="#00E096" />
          <Bar dataKey="priceUsd" fill="#44C5E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </div>
    );
  }
  export default Chart;