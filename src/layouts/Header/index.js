import './Header.css'
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import { useEffect, useState } from 'react';
// import Search_Custom from '../../components/Search_Custom';
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Box from "@mui/material/Box";
import { Avatar, IconButton, Menu, Tooltip} from '@mui/material';



function Header() {    
    const [searchResult, setSearchResult] = useState([])
    

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, ,2, 3]);
        }, 0)
    })
    return (
        <header className='wrapper'
        >
            <div className='inner'>
                <div className='logo'>
                    <img 
                        src = {process.env.PUBLIC_URL + `/Imgs/logo.png`}
                        alt = "VietVictory"
                        width= "190"
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
                    <div>
                        <b>09:58 AM</b>
                    </div>
                    <div>Sunday, July 17. 2022</div>

                    
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