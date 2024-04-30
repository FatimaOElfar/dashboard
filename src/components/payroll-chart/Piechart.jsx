import React from 'react'
import Bullet from './Bullet';
import CustomLabel from './CustomLabel';
import CustomizedLegend from './CustomizedLegend';
import "./chart.css"

import {
  PieChart,
  Pie,
  Legend,
  Cell,
  ResponsiveContainer,
  Label
} from "recharts";
import moment from "moment";

console.log(
  moment(1612390027112).startOf("minute").add(1, "minutes").toISOString()
);
const data01 = [
  { name: "Salary", value: 70 },
  { name: "Bonus", value: 5 },
  { name: "Taxes", value: 5 },
  { name: "Ben.", value: 10 },
  { name: "Comm.", value: 10 }
];

const COLORS = ["#034488", "#769DF9", "#00E096", "#F7C343","#E45F3F"];

// style={{ width: "300px", height: 300 ,background:"#fff",margin:"0 20px", borderRadius:"16px", boxshadow: "0px 2px 10px 0px #0000001A",}}
const Piechart = () => {
    return (
        <div className='payroll-piechart' >
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data01}
                dataKey="value"
                cx={200}
                cy={200}
                innerRadius={45}
                outerRadius={70}
              >
                {data01.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                {/* <Label
                  content={<CustomLabel labelText="ICPs" value={15} />}
                  position="center"
                /> */}
              </Pie>
              <Legend content={<CustomizedLegend />} style={{marginTop:"10%"}} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }
    

export default Piechart
