import React from 'react'

function Employee({}) {
    return (
        <div>
            <p>{props.employee.id}</p>
            <p>{props.employee.title}</p>
            <img src={props.Employee.avatar}/><p>{props.Employee.Department_role}</p>
            <p>{props.Employee.Date}</p>
            <p>{props.Employee.Status}</p>
            <p>{props.Employee.Leave_From}</p>
            <p>{props.Employee.Leave_To}</p>
            <p>{props.Employee.Leave_type}</p>
            <p>{props.Employee.Reason}</p>
            <p>{props.Employee.Action}</p>
        </div>
    )
}

export default Employee;