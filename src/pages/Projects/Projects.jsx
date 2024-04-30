import './projects.css'
import * as React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import {GrFormAdd} from 'react-icons/gr'
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";


export const Projects = () => {
    return (
        <div className='projects'>
            <PrimarySearchAppBar/>
            <div className='Projects-container'>
                <Row>
                    <Col className='Projects-header'>
                        <h5>Projects</h5>
                        <div className='checkcircleicon-done'>
                            <CheckCircleIcon className='checkcircleicon'/><p>30 done this month</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='search-Projects'>
                            <input className='Projects-search-input' type='search' placeholder='Search for Projects'/>
                        </div>
                    </Col>
                    <Col></Col>
                    <Col>
                        <button className='add-projects-btn'>All Projects<GrFormAdd/></button>
                    </Col>
                </Row>
                <Container className='project-card-container'>
                    <Row>
                        <Col sx={4}>
                            <Card className='projects-card'>
                                <Card.Body>
                                    <Card.Title style={{color: "rgba(3, 68, 136, 0.7)"}}>Coffee Page - Main
                                        Page</Card.Title>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='design-column'>Design</Col>
                                            <Col className='high-column'>High</Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col className='completed-column'>completed</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Card.Text
                                        style={{
                                            color: "rgba(116, 116, 116, 1)",
                                            marginTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "12px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tristique orci sem, id ultrices nibh pulvinar a.
                                        Integer gravida placerat molestie.</Card.Text>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='task-column'>
                                                <PlaylistAddCheckIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                20Tasks
                                            </Col>
                                            <Col></Col>
                                            <Col className='money-recieve-column'>
                                                <CurrencyExchangeIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                $15,000
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='start-date-column'>
                                                <CalendarMonthIcon
                                                    style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                30 June 2023, 10PM
                                            </Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Row>
                                        <Col style={{
                                            marginTop: "1rem",
                                            color: "rgba(3, 68, 136, 0.7)",
                                            fontSize: "16px",
                                            fontWeight: "400"
                                        }}>
                                            Progress
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{display: "flex"}}>
                                            <Col>
                                                <div className='card-progress-completed'>
                                                    <div className='progress-completed'></div>
                                                </div>
                                            </Col>
                                            <Col><p style={{color: "rgba(3, 198, 85, 1)"}}>100%</p></Col>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sx={4}>
                            <Card className='projects-card'>
                                <Card.Body>
                                    <Card.Title style={{color: "rgba(3, 68, 136, 0.7)"}}>Coffee Page - Main
                                        Page</Card.Title>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='design-column'>Design</Col>
                                            <Col className='high-column'>High</Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col className='ongoing-column'>Ongoing</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Card.Text
                                        style={{
                                            color: "rgba(116, 116, 116, 1)",
                                            marginTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "12px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tristique orci sem, id ultrices nibh pulvinar a.
                                        Integer gravida placerat molestie.</Card.Text>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='task-column'>
                                                <PlaylistAddCheckIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                20Tasks
                                            </Col>
                                            <Col></Col>
                                            <Col className='money-recieve-column'>
                                                <CurrencyExchangeIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                $15,000
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='start-date-column'>
                                                <CalendarMonthIcon
                                                    style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                30 June 2023, 10PM
                                            </Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Row>
                                        <Col style={{
                                            marginTop: "1rem",
                                            color: "rgba(3, 68, 136, 0.7)",
                                            fontSize: "16px",
                                            fontWeight: "400"
                                        }}>
                                            Progress
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{display: "flex"}}>
                                            <Col>
                                                <div className='card-progress-bar'>
                                                    <div className='progress'></div>
                                                </div>
                                            </Col>
                                            <Col><p style={{color: "rgba(3, 68, 136, 0.3)"}}>30%</p></Col>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sx={4}>
                            <Card className='projects-card'>
                                <Card.Body>
                                    <Card.Title style={{color: "rgba(3, 68, 136, 0.7)"}}>Coffee Page - Main
                                        Page</Card.Title>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='design-column'>Design</Col>
                                            <Col className='high-column'>High</Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col className='ongoing-column'>Ongoing</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Card.Text
                                        style={{
                                            color: "rgba(116, 116, 116, 1)",
                                            marginTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "12px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tristique orci sem, id ultrices nibh pulvinar a.
                                        Integer gravida placerat molestie.</Card.Text>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='task-column'>
                                                <PlaylistAddCheckIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                20Tasks
                                            </Col>
                                            <Col></Col>
                                            <Col className='money-recieve-column'>
                                                <CurrencyExchangeIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                $15,000
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='start-date-column'>
                                                <CalendarMonthIcon
                                                    style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                30 June 2023, 10PM
                                            </Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Row>
                                        <Col style={{
                                            marginTop: "1rem",
                                            color: "rgba(3, 68, 136, 0.7)",
                                            fontSize: "16px",
                                            fontWeight: "400"
                                        }}>
                                            Progress
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{display: "flex"}}>
                                            <Col>
                                                <div className='card-progress-bar'>
                                                    <div className='progress'></div>
                                                </div>
                                            </Col>
                                            <Col><p style={{color: "rgba(3, 68, 136, 0.3)"}}>30%</p></Col>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sx={4}>
                            <Card className='projects-card'>
                                <Card.Body>
                                    <Card.Title style={{color: "rgba(3, 68, 136, 0.7)"}}>Coffee Page - Main
                                        Page</Card.Title>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='design-column'>Design</Col>
                                            <Col className='high-column'>High</Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col className='ongoing-column'>Ongoing</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Card.Text
                                        style={{
                                            color: "rgba(116, 116, 116, 1)",
                                            marginTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "12px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tristique orci sem, id ultrices nibh pulvinar a.
                                        Integer gravida placerat molestie.</Card.Text>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='task-column'>
                                                <PlaylistAddCheckIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                20Tasks
                                            </Col>
                                            <Col></Col>
                                            <Col className='money-recieve-column'>
                                                <CurrencyExchangeIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                $15,000
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='start-date-column'>
                                                <CalendarMonthIcon
                                                    style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                30 June 2023, 10PM
                                            </Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Row>
                                        <Col style={{
                                            marginTop: "1rem",
                                            color: "rgba(3, 68, 136, 0.7)",
                                            fontSize: "16px",
                                            fontWeight: "400"
                                        }}>
                                            Progress
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{display: "flex"}}>
                                            <Col>
                                                <div className='card-progress-bar'>
                                                    <div className='progress'></div>
                                                </div>
                                            </Col>
                                            <Col><p style={{color: "rgba(3, 68, 136, 0.3)"}}>30%</p></Col>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sx={4}>
                            <Card className='projects-card'>
                                <Card.Body>
                                    <Card.Title style={{color: "rgba(3, 68, 136, 0.7)"}}>Coffee Page - Main
                                        Page</Card.Title>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='design-column'>Design</Col>
                                            <Col className='high-column'>High</Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col className='ongoing-column'>Ongoing</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Card.Text
                                        style={{
                                            color: "rgba(116, 116, 116, 1)",
                                            marginTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "12px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tristique orci sem, id ultrices nibh pulvinar a.
                                        Integer gravida placerat molestie.</Card.Text>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='task-column'>
                                                <PlaylistAddCheckIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                20Tasks
                                            </Col>
                                            <Col></Col>
                                            <Col className='money-recieve-column'>
                                                <CurrencyExchangeIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                $15,000
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='start-date-column'>
                                                <CalendarMonthIcon
                                                    style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                30 June 2023, 10PM
                                            </Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Row>
                                        <Col style={{
                                            marginTop: "1rem",
                                            color: "rgba(3, 68, 136, 0.7)",
                                            fontSize: "16px",
                                            fontWeight: "400"
                                        }}>
                                            Progress
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{display: "flex"}}>
                                            <Col>
                                                <div className='card-progress-bar'>
                                                    <div className='progress'></div>
                                                </div>
                                            </Col>
                                            <Col><p style={{color: "rgba(3, 68, 136, 0.3)"}}>30%</p></Col>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sx={4}>
                            <Card className='projects-card'>
                                <Card.Body>
                                    <Card.Title style={{color: "rgba(3, 68, 136, 0.7)"}}>Coffee Page - Main
                                        Page</Card.Title>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='design-column'>Design</Col>
                                            <Col className='high-column'>High</Col>
                                            <Col></Col>
                                        </Row>
                                        <Row>
                                            <Col className='completed-column'>completed</Col>
                                            <Col></Col>
                                            <Col></Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Card.Text
                                        style={{
                                            color: "rgba(116, 116, 116, 1)",
                                            marginTop: "1rem",
                                            fontWeight: "400",
                                            fontSize: "12px"
                                        }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus tristique orci sem, id ultrices nibh pulvinar a.
                                        Integer gravida placerat molestie.</Card.Text>
                                    <Card.Subtitle>
                                        <Row>
                                            <Col className='task-column'>
                                                <PlaylistAddCheckIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                20Tasks
                                            </Col>
                                            <Col></Col>
                                            <Col className='money-recieve-column'>
                                                <CurrencyExchangeIcon style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                $15,000
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className='start-date-column'>
                                                <CalendarMonthIcon
                                                    style={{color: "rgba(151, 151, 151, 1)"}}/>
                                                30 June 2023, 10PM
                                            </Col>
                                        </Row>
                                    </Card.Subtitle>
                                    <Row>
                                        <Col style={{
                                            marginTop: "1rem",
                                            color: "rgba(3, 68, 136, 0.7)",
                                            fontSize: "16px",
                                            fontWeight: "400"
                                        }}>
                                            Progress
                                        </Col>
                                    </Row>
                                    <Row>
                                        <div style={{display: "flex"}}>
                                            <Col>
                                                <div className='card-progress-completed'>
                                                    <div className='progress-completed'></div>
                                                </div>
                                            </Col>
                                            <Col><p style={{color: "rgba(3, 198, 85, 1)"}}>100%</p></Col>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}