import './departments.css'
import EnhancedTable from '../../components/table/EnhancedTable';
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";

export const Departments = () => {
    return (
        <div className='departments'>
            <PrimarySearchAppBar/>
            <EnhancedTable/>
        </div>
    )
}