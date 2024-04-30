import './payroll.css'
import Chart from '../../components/payroll-chart/Chart'
import {useState, useEffect} from 'react';

import PieChart from '../../components/payroll-chart/Piechart'
import PayTable from '../../components/payroll-chart/PayTable';
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";
import Payrol from "../../components/payroll-chart/Payrol.jsx";


export const Payroll = () => {
    const [data, setdata] = useState();
    useEffect(() => {
        const fetchDatas = async () => {
            const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
            const data = await res.json();
            console.log(data);
            setdata(data?.data);
        };
        fetchDatas();
    }, []);
    return (
        <div className='payroll'>
            <PrimarySearchAppBar/>
            <div className="d-flex flex-wrap justify-content-between mt-4">
                <Chart data={data}/>
                <Payrol/>
            </div>
            <PayTable/>

        </div>
    )
}