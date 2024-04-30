import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchIcon from '@mui/icons-material/Search';
import './topsearch.css'
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AdminPhoto from '../../assets/avatar.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const TopSearch = () => {
    return (
        <Row>
            <Col>
                <div className='search-div'>
                    <input className='search-input' type='search' placeholder='Search Here'/>
                    <span className='search-icon'><SearchIcon/></span>
                </div>

            </Col>
            <Col>
                <Row>
                    <Col>
                        <div className='top-icons'>
                            <span><CommentOutlinedIcon/></span>
                            <span><NotificationsNoneIcon/></span>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex justify-content-evenly admin-photo'>
                            <span>
                                <img className='admin-avatar' src={AdminPhoto} alt='admin photo'/>
                            </span>
                            <span className='admin-name'>
                                <h5>Admin Name<span><KeyboardArrowDownIcon/></span></h5>
                                <h6>Admin</h6>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}