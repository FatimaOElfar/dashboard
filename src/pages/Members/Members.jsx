import './members.css'
import AddEmployee from "../../components/AddEmployee/AddEmployee.jsx";
import {useState} from "react";
import {AllEmployees} from "../../components/AllEmployees/AllEmployees.jsx";
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";

export const Members = () => {

    const [addEmployee, setAddEmployee] = useState(false);
    const handleShow = () => {
        setAddEmployee(!addEmployee)
    }
    return (
        <div className='members'>
            <PrimarySearchAppBar/>
            {
                addEmployee ? <AddEmployee handleShow={handleShow}/> : <AllEmployees handleShow={handleShow}/>
            }

        </div>
    )
}