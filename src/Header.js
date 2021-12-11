import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccount from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HeaderOption from './HeaderOption';
export default function Header() {
    return (
        <div className='header'>

            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Linkedin.svg/1200px-Linkedin.svg.png" alt="" />

                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="home" />
                <HeaderOption Icon={SupervisorAccount} title="My Network" />
                <HeaderOption Icon={ChatIcon} title="Jobs" />
                <HeaderOption Icon={NotificationsIcon} title="Messaging" />
                <HeaderOption Icon={BusinessCenterIcon} title="Notifictions" />
                <HeaderOption avatar=" " title="me" />
            </div>
        </div>
    )
}
