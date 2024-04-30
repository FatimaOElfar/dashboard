import './leaves.css'
import {useMemo} from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import {MaterialReactTable} from 'material-react-table';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClearIcon from '@mui/icons-material/Clear';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";
// import Employee from '../../components/Employee.jsx';
// import Table from 'react-bootstrap/Table';


export const Leaves = () => {


    const data = [
        {
            id: 1,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Sick',
            Reasons: 'Lorem ipsum dod',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 2,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Approved',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Paid',
            Reasons: 'none',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 3,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Reject',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Sick',
            Reasons: 'Lorem ipsum dod',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 4,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Sick',
            Reasons: 'Lorem ipsum dod',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 5,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: '20 Feb 2022',
            Reasons: 'Sick',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 6,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Sick',
            Reasons: 'Lorem ipsum dod',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 7,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: '20 Feb 2022',
            Reasons: 'Sick',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 8,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: '20 Feb 2022',
            Reasons: 'Sick',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 9,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: '20 Feb 2022',
            Reasons: 'Sick',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 10,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Paid',
            Reasons: 'none',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },
        {
            id: 11,
            name: 'Ahmed Khaled',
            departmentrole: 'Graphic Designer',
            date: '20 Feb 2022',
            status: 'Pending',
            LeaveFrom: "20 Feb 2022",
            LeaveTo: '20 Feb 2022',
            LeaveType: 'Paid',
            Reasons: 'none',
            action: <><CheckCircleIcon/><ClearIcon/></>
        },


    ];
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id', //access nested data with dot notation
                header: 'Id',
                size: 150,
            },
            {
                accessorKey: 'name', //access nested data with dot notation
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'departmentrole',
                header: 'Department Role',
                size: 150,
            },
            {
                accessorKey: 'status',
                header: 'Status',
                size: 150,
            },
            {
                accessorKey: 'LeaveFrom',
                header: 'Leave From',
                size: 150,
            },
            {
                accessorKey: 'LeaveTo', //normal accessorKey
                header: 'Leave To',
                size: 200,
            },
            {
                accessorKey: 'LeaveType',
                header: 'Leave Type',
                size: 150,
            },
            {
                accessorKey: 'Reasons', //normal accessorKey
                header: 'Reasons',
                size: 200,
            },
            {
                accessorKey: 'action', //normal accessorKey
                header: 'Action',
                size: 200,
            },
        ],
        [],
    );

    return (
        <div className='leaves'>
            <PrimarySearchAppBar/>
            <div className='leaves-container'>
                <Row>
                    <Col className='leaves-header'>Leaves Request</Col>
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
        </div>
    )
}
