import './attendance.css'
import Attendencetable from '../../components/attendence/Attendencetable.jsx';
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";

export const Attendance = () => {
    return (
        <div className='attendance'>
            <PrimarySearchAppBar/>
            <Attendencetable/>

        </div>
    )
}