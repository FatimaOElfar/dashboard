import {useMemo} from 'react';
import {MaterialReactTable} from 'material-react-table';
import './allemployees.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {GrFormAdd} from 'react-icons/gr'
import {isDisabled} from "bootstrap/js/src/util/index.js";

export const AllEmployees = ({handleShow}) => {
    const data = [
        {
            id: 1,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 2,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 3,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 4,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 5,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 6,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 7,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 8,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 9,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 10,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 11,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        },
        {
            id: 12,
            name: 'Adel ff',
            departmentrole: 'Graphic Designer',
            email: 'addkfkdfk@gmail.com',
            mobile: '01234567891',
            address: "fjfjffjjffjjc",
            joiningdate: '20 Feb 2022'
        }
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
                accessorKey: 'email', //normal accessorKey
                header: 'Email',
                size: 200,
            },
            {
                accessorKey: 'mobile',
                header: 'Mobile',
                size: 150,
            },
            {
                accessorKey: 'joiningdate',
                header: 'Joining Date',
                size: 150,
            },
        ],
        [],
    );

    return (
        <div className='all-employees p-3'>
            <Row className='my-3'>
                <Col>
                    <h5 style={{color: 'var(--second-color)'}}>All Employees</h5>
                </Col>
                <Col>
                    <input type='search' className='search-employee p-3' placeholder='Search for Employees'/>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <button onClick={handleShow} className='add-employee-btn'>Add Emp.<GrFormAdd/></button>
                </Col>
            </Row>
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
    )
}