import {useMemo} from 'react';
import {MaterialReactTable} from 'material-react-table';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ViewerMember from '../attendence/ViewerMember.jsx'

function Attendencetable() {

    const data = [
        {
            EmpID: 1,
            EmpName: 'Sara Wael',
            DeptName: 'Ali Mohamed',
            Date: '15/6/2023',
            CheckIn: '-',
            CheckOut: "-",
            Production: '-',
            Status: 'Absent',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 2,
            EmpName: 'Kareem Ali',
            DeptName: 'Asmaa Omar',
            Date: '15/6/2023',
            CheckIn: '09:00 AM',
            CheckOut: "06:00 PM",
            Production: '9 Hrs',
            Status: 'Present',
            Overtime: '2 Hrs',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 3,
            EmpName: 'Kareem Ali',
            DeptName: 'Asmaa Omar',
            Date: '15/6/2023',
            CheckIn: '09:00 AM',
            CheckOut: "06:00 PM",
            Production: '9 Hrs',
            Status: 'Present',
            Overtime: '2 Hrs',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 4,
            EmpName: 'Sara Wael',
            DeptName: 'Ali Mohamed',
            Date: '15/6/2023',
            CheckIn: '-',
            CheckOut: "-",
            Production: '-',
            Status: 'Absent',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 5,
            EmpName: 'Kareem Ali',
            DeptName: 'Asmaa Omar',
            Date: '15/6/2023',
            CheckIn: '09:00 AM',
            CheckOut: "06:00 PM",
            Production: '9 Hrs',
            Status: 'Present',
            Overtime: '2 Hrs',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 6,
            EmpName: 'Kareem Ali',
            DeptName: 'Asmaa Omar',
            Date: '15/6/2023',
            CheckIn: '09:00 AM',
            CheckOut: "06:00 PM",
            Production: '9 Hrs',
            Status: 'Present',
            Overtime: '2 Hrs',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 7,
            EmpName: 'Sara Wael',
            DeptName: 'Ali Mohamed',
            Date: '15/6/2023',
            CheckIn: '-',
            CheckOut: "-",
            Production: '-',
            Status: 'Absent',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 8,
            EmpName: 'Sara Wael',
            DeptName: 'Ali Mohamed',
            Date: '15/6/2023',
            CheckIn: '-',
            CheckOut: "-",
            Production: '-',
            Status: 'Absent',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 9,
            EmpName: 'Kareem Ali',
            DeptName: 'Asmaa Omar',
            Date: '15/6/2023',
            CheckIn: '09:00 AM',
            CheckOut: "03:00 PM",
            Production: '6 Hrs',
            Status: 'Present',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 10,
            EmpName: 'Sara Wael',
            DeptName: 'Ali Mohamed',
            Date: '15/6/2023',
            CheckIn: '-',
            CheckOut: "-",
            Production: '-',
            Status: 'Absent',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        {
            EmpID: 11,
            EmpName: 'Sara Wael',
            DeptName: 'Ali Mohamed',
            Date: '15/6/2023',
            CheckIn: '-',
            CheckOut: "-",
            Production: '-',
            Status: 'Absent',
            Overtime: '-',
            Details: <><button className='Attendence-btn'>view</button></>
        },
        
    ];
    const columns = useMemo(
        () => [
            {
                accessorKey: 'EmpID', //access nested data with dot notation
                header: 'Emp ID',
                size: 150,
            },
            {
                accessorKey: 'EmpName', //access nested data with dot notation
                header: 'Emp. Name',
                size: 150,
            },
            {
                accessorKey: 'DeptName',
                header: 'Dept. Name',
                size: 150,
            },
            {
                accessorKey: 'Date', //normal accessorKey
                header: 'Date',
                size: 200,
            },
            {
                accessorKey: 'CheckIn',
                header: 'Check in',
                size: 150,
            },
            {
                accessorKey: 'CheckOut',
                header: 'Check out',
                size: 150,
            },
            {
                accessorKey: 'Production',
                header: 'Production',
                size: 150,
            },
            {
                accessorKey: 'Status',
                header: 'Status',
                size: 150,
            },
            {
                accessorKey: 'Overtime',
                header: 'Overtime',
                size: 150,
            },
            {
                accessorKey: 'Details',
                header: 'Details',
                size: 150,
            }
        ],
        [],
    );

  return (
    <div>
            <div className='attendence-container'>
                <Row>
                    <Col className='attendence-header'>Attendence</Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><input className='Date-Attendence' type='date'/></Col>

                </Row>
            <br/>
            <MaterialReactTable
                muiSelectCheckboxProps={{
                    sx: {
                        color: '#034488'
                    } //makes all checkboxes use the secondary color
                }}
                enableRowSelection={true}
                columns={columns} data={data}
                muiTableHeadCellProps={{
                    sx: {
                        fontSize: {
                            xs: '10px',
                            sm: '11px',
                            md: '12px',
                            lg: '16px',
                            xl: '14px',
                        },
                        color: '#034488',
                    },
                }}
                muiSelectAllCheckboxProps={{
                    sx: {
                        color: '#034488',
                    }
                }}
                muiTableBodyProps={{
                    sx: {color: '#034488'}
                }}
                muiTableBodyCellProps={{
                    sx: {
                        color: '#034488'
                    }
                }}
            />
            </div>
        <ViewerMember/>

    </div>
  )
}

export default Attendencetable;


