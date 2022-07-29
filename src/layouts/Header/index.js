import './Header.css'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { useEffect, useState } from 'react';
// import Search_Custom from '../../components/Search_Custom';
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import { Avatar, IconButton, Menu, Tooltip, Typography} from '@mui/material';

function checkDay() {
    let tmp = ""
    var dayOfWeek = new Date();
    if (dayOfWeek.getDay() === 1) tmp = "Monday";
    else if (dayOfWeek.getDay() === 2) tmp = "Tuesday";
    else if (dayOfWeek.getDay() === 3) tmp = "Wednesday";
    else if (dayOfWeek.getDay() === 4) tmp = "Thursday";
    else if (dayOfWeek.getDay() === 5) tmp = "Friday";
    else if (dayOfWeek.getDay() === 6) tmp = "Saturday";
    else tmp = "Sunday";
    return tmp.toString();
}
function checkMonth() {
    let tmp = ""
    var month = new Date();
    if (month.getMonth()+ 1 === 1) tmp = "January";
    else if (month.getMonth()+ 1 === 2) tmp = "February";
    else if (month.getMonth()+ 1 === 3) tmp = "March";
    else if (month.getMonth()+ 1 === 4) tmp = "April";
    else if (month.getMonth()+ 1 === 5) tmp = "May";
    else if (month.getMonth()+ 1 === 6) tmp = "June";
    else if (month.getMonth()+ 1 === 7) tmp = "July";
    else if (month.getMonth()+ 1 === 8) tmp = "August";
    else if (month.getMonth()+ 1 === 9) tmp = "September";
    else if (month.getMonth()+ 1 === 10) tmp = "October";
    else if (month.getMonth()+ 1 === 11) tmp = "November";
    else tmp = "December"
    return tmp.toString();
}
function checkDate() {
    var date = new Date();
    return date.getDate().toString();
}
function checkYear() {
    var date = new Date();
    return date.getFullYear().toString();
}

function checkHour() {
    let tmp = ""
    let tmpHour = 0
    var date = new Date();
    tmpHour = date.getHours()
    if (tmpHour > 12)
    tmpHour -= 12
    tmp = tmpHour.toString()
    if (tmp.length == 1) tmp = '0' + tmp
    return tmp;
}
function checkMinute() {
    let tmp = ""
    var date = new Date();
    tmp = date.getMinutes().toString();
    if (tmp.length == 1) tmp = "0"+tmp
    return tmp;
}

function checkAPM() {
    let tmp = ""
    let tmpHour = 0
    var date = new Date();
    tmpHour = date.getHours()
    if (tmpHour > 12) tmp = "PM";
    else tmp = "AM"
    return tmp;
}

function Header() {    
    const [searchResult, setSearchResult] = useState([])
    

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, ,2, 3]);
        }, 0)
    })
    
    var today = new Date();
    
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const day = today.getDay();
    let dateOnHeader = checkDay()+', ' + checkMonth()  + ' ' + checkDate() + '. ' + checkYear();
    let hourOnHeader = checkHour()+':' + checkMinute() + ' ' +checkAPM();
    // const isWeekend = (day === 6 || day === 7); 

    return (
        <header className='wrapper'
        >
            <div className='inner'>
                <div className='logo'>
                    <img 
                        src = {process.env.PUBLIC_URL + `/Imgs/logo.png`}
                        alt = "VietVictory"
                        width= "170"
                        height = "50"
                    />
                </div>
                <div className='university_logo'>
                    <img 
                            src = "https://app.universityhub.com/assets/images/univ-hub-logo-only.png"
                            alt = "Hub_University"
                            width= "70"
                            height = "55"
                        />
                </div>
{/* 
                <div className='search_bar'>
                    <Search_Custom />
                </div> */}

                <div className='time'>
                    <Typography variant="h7" component="h4">{hourOnHeader}</Typography>
                    <Typography variant="h7" component="h4">{dateOnHeader}</Typography>
                    
                </div>
                <div className='email_logo'>
                        <EmailIcon 
                            sx={{ 
                                display: "flex",
                                marginRight: '5px',
                                // padding: 'px'
                            }} 
                        />
                </div>

                <div className='bell_logo'>
                    <NotificationsIcon
                        // sx={{ display: { xs: "flex" }}}
                        />
                </div>

                <div className='avt_logo'>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            //   anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right"
                            }}
                        >
                        </Menu>
                    </Box>
                </div>
                <div className='name_user'>
                    <p><b>Admin</b></p>
                </div>
            </div>


        </header>
    )
}

export default Header;