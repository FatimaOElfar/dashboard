import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import "./ViewerMember.css";
// import Grid from '@mui/material/Grid';
import Card from 'react-bootstrap/Card';
import AdminPhoto from '../../assets/avatar.png';
import Calender from '../calender/Calender'




function ViewerMember() {
  return (
    <div>
        <Container className='viewermember'>
        <Row className='viewermember-row'>
            <Col xs={3}> 
            <Card className='viewermember-title'>
                <Card.Body>
                    <Card.Title><img src={AdminPhoto}/></Card.Title>
                    <Card.Subtitle style={{marginBottom:"1rem"}}>Sara Wael</Card.Subtitle>
                    <Card.Text style={{marginBottom:"2rem"}}>UI/UX Designer</Card.Text>
                    <Card.Text>Join 20 Feb 2022</Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col className='' xs={5}>
                <Row>
                <Col style={{color:"#034488",fontWeight:"500"}} xs={3}>Check in</Col>
                <Col style={{color:"#034488",fontWeight:"500"}} xs={3}>Check out</Col>
                <Col style={{color:"#034488",fontWeight:"500"}} xs={3}>Email</Col>
                </Row>
                <Row>
                <Col style={{color:"rgba(3, 68, 136, 1)",fontWeight:"400"}} xs={3}>09:00 AM</Col>
                <Col style={{color:"rgba(3, 68, 136, 1)",fontWeight:"400"}} xs={3}>06:00 AM</Col>
                <Col style={{color:"rgba(3, 68, 136, 1)",fontWeight:"400"}} xs={3}>example@email.com</Col>
                </Row>
                <Row style={{marginTop:"3rem"}} className='viewermember-box'>
                <Col xs={6}>    
                <Card style={{background: "rgba(217, 217, 217, 1)" ,color:"#034488"}} className='viewermember-card'>
                <Card.Body>
                <Card.Title>Emp. ID</Card.Title>
                    <Card.Text>1625</Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={6}>    
                <Card style={{background: "rgba(253, 221, 129, 1)",color:"#034488"}} className='viewermember-card'>
                <Card.Body>
                    <Card.Title>Total Leave</Card.Title>
                    <Card.Text>2</Card.Text>
                </Card.Body>
                </Card>
                </Col>
                </Row>
                <Row style={{marginTop:"1rem"}} className='viewermember-box'>
                <Col xs={6}>    
                <Card style={{background: "rgba(129, 227, 170, 1)" ,color:"#034488"}} className='viewermember-card'>
                <Card.Body>
                    <Card.Title>Total Present</Card.Title>
                    <Card.Text>7</Card.Text>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={6}>    
                <Card style={{background: "rgba(242, 83, 77, 1)",color:"white"}} className='viewermember-card'>
                <Card.Body>
                    <Card.Title>Total Absent</Card.Title>
                    <Card.Text>3</Card.Text>
                </Card.Body>
                </Card>
                </Col>

                </Row>
            </Col>
            <Col xs={4}>
            <Card border='0' className=''>
                <Card.Body >
                    <Calender/>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default ViewerMember;