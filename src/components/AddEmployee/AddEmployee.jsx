import './addemployee.css'
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AddEmployee({handleShow}) {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='add-employee mt-4'>
            <h4 style={{color: 'var(--second-color)'}}>Add Employee</h4>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Joining Date</Form.Label>
                            <Form.Control type='date'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Position</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type='tel'/>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={6}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Birth Date</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control as="textarea"/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-end my-5'>
                        <button onClick={handleShow} className='memberform-btn py-2 px-5 mx-3'>
                            Cancel
                        </button>
                        <button type="submit" className='btn-main py-2 px-5'>
                            Submit
                        </button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}