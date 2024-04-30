import AppsIcon from '@mui/icons-material/Apps';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import {NavLink} from "react-router-dom";
import Diversity2Icon from '@mui/icons-material/Diversity2';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SettingsIcon from '@mui/icons-material/Settings';
import './root.css'
import logo from '../../assets/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import {Outlet} from "react-router-dom";

const Root = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: '/dashboard',
            name: "Dashboard",
            icon: <AppsIcon/>
        },
        {
            path: "/members",
            name: "Members",
            icon: <Diversity3Icon/>
        },
        {
            path: "/departments",
            name: "Departments",
            icon: <ApartmentIcon/>
        },
        {
            path: "/attendance",
            name: "Attendance",
            icon: <AccessTimeIcon/>
        },
        {
            path: "/leaves",
            name: "Leaves",
            icon: <CalendarTodayIcon/>
        },
        {
            path: "/projects",
            name: "Projects",
            icon: <ContentPasteIcon/>
        }
        ,
        {
            path: "/events",
            name: "Events",
            icon: <Diversity2Icon/>
        }
        ,
        {
            path: "/payroll",
            name: "Payroll",
            icon: <MonetizationOnIcon/>
        }
        ,
        {
            path: "/settings",
            name: "Settings",
            icon: <SettingsIcon/>
        }
    ]
    return (
        <div className='d-flex'>
            <div className="sidebar" style={{width: isOpen ? "240px" : "60px"}}>
                <div className="top_section" style={{padding: isOpen ? '20px 15px' : '20px 18px'}}>
                    <div className="logo" style={{display: isOpen ? "block" : "none"}}>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars-side">
                        <MenuIcon onClick={toggle}/>
                    </div>
                </div>
                {/*<div className='back-forword'><ArrowBackIcon/></div>*/}
                {
                    menuItem.map((item, index) => (
                        <NavLink
                            to={item.path} key={index} className="link-side" style={{
                            padding: isOpen ? "10px" : "10px 5px"
                        }}>
                            <div className="icon"
                                 style={{
                                     padding: isOpen ? "" : "5px 0"
                                 }}>{item.icon}</div>
                            <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                        </NavLink>
                    ))
                }
                <button className='btn-main mt-md-4' style={{display: isOpen ? "block" : "none"}}>
                    <span><LogoutIcon/></span> Log out
                </button>
            </div>
            <Container fluid='md ' className="overflow-hidden">
                <main className='content-pages mt-2 mb-2'><Outlet/></main>
            </Container>
        </div>
    );
};
export default Root