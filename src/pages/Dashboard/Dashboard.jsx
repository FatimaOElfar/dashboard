import './dashboard.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Diversity3Icon from '@mui/icons-material/Diversity3';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HikingIcon from '@mui/icons-material/Hiking';
import {ProgressChart} from "../../components/ProgressChart/ProgressChart.jsx";
import {ChartColumnDashboard} from "../../components/ChartColumnDashboard/ChartColumnDashboard.jsx";
import {CardDashboard} from "../../components/CardDashboard/CardDashboard.jsx";
import PrimarySearchAppBar from "../../components/TopSerarch/PrimarySearchAppBar.jsx";

export const Dashboard = () => {

    return (
        <div className='dashboard'>
            <PrimarySearchAppBar/>
            <div className='mt-5'>
                <Row>
                    <Col className='mb-3' sm={6} md={3}>
                        <CardDashboard
                            bgColor='rgba(44, 128, 213, 0.70)' icon={<Diversity3Icon/>}
                            title='Total Employees' numberActive='200' number='200'
                        />
                    </Col>
                    <Col className='mb-3' sm={6} md={3}>
                        <CardDashboard
                            bgColor='rgba(255, 148, 122, 0.80)' icon={<CalendarTodayIcon/>}
                            title='On Leave' numberActive='100' number='200'
                        />
                    </Col>
                    <Col className='mb-3' sm={6} md={3}>
                        <CardDashboard
                            bgColor='rgba(79, 209, 197, 0.70)' icon={<HikingIcon/>}
                            title='Trainers' numberActive='50' number='100'
                        />
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className='cards-dashboard d-flex flex-row' border='none'>
                            <ProgressChart/>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='mt-5'>
                <Row className='justify-content-between'>
                    <Col className='me-1 pt-5 mb-3' style={{backgroundColor: '#fff', borderRadius: '16px'}} xs={12}
                         sm={8}
                         md={8}>
                        <ChartColumnDashboard/>
                    </Col>
                    <Col className='px-4' style={{backgroundColor: '#fff', borderRadius: '16px'}} xs={12} sm={3} md={3}>
                        <div className='dash-events py-5'>
                            <h4 style={{color: '#034488', marginBottom: '20px'}}>Events</h4>
                            <Row className='flex-column g-2'>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='dash-event-card d-flex'>
                                        <div className='me-2 dash-date'>
                                            <span className='d-block'>10</span>
                                            <span className=''>Jun</span>
                                        </div>
                                        <div>
                                            <h6>Team Meeting</h6>
                                            <p>Attend all Projects</p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='mt-5'>
                <Row>
                    <Col className='mb-3' sm={6} md={3}>
                        <Card className='cards-dashboard d-flex flex-row' border='none'>
                            <ProgressChart/>
                        </Card>
                    </Col>
                    <Col className='mb-3' sm={6} md={3}>
                        <CardDashboard
                            bgColor='rgba(44, 128, 213, 0.70)' icon={<Diversity3Icon/>}
                            title='Total Employees' numberActive='200' number='200'
                        />
                    </Col>
                    <Col className='mb-3' sm={6} md={3}>
                        <CardDashboard
                            bgColor='rgba(255, 148, 122, 0.80)' icon={<CalendarTodayIcon/>}
                            title='On Leave' numberActive='100' number='200'
                        />
                    </Col>
                    <Col className='mb-3' sm={6} md={3}>
                        <CardDashboard
                            bgColor='rgba(79, 209, 197, 0.70)' icon={<HikingIcon/>}
                            title='Trainers' numberActive='50' number='100'
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )
}