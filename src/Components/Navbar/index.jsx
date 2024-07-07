import React, { useEffect, useState } from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AssignmentOutlined as AssignmentOutlinedIcon, Home as HomeIcon,
    PersonOutlineOutlined as PersonOutlineOutlinedIcon, ListAltOutlined as ListAltOutlinedIcon,
    LogoutOutlined as LogoutOutlinedIcon, PersonAddAltOutlined as PersonAddAltOutlinedIcon, NotificationsNoneOutlined as NotificationsNoneOutlinedIcon
} from '@mui/icons-material';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
} from "flowbite-react";
import { useDispatch, useSelector } from 'react-redux';
import { setWidth } from '../../Store/drawerWidth';
import { studentLogout } from '../../Config/mongodb.jsx';
import { removeUser } from '../../Store/userSlice.jsx';

const drawerWidth = 300;

export default function ResponsiveDrawer(props) {
    const path = useLocation().pathname.slice(1)
    console.log(path);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.userReducer.user);
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [errMsg, setErrMsg] = useState();
    const [successMsg, setSuccessMsg] = useState();

    useEffect(() => {
        dispatch(setWidth(drawerWidth));
    }, []);

    const displayData = {
        top: [{ name: 'Home', icon: 'home' }, { name: 'Classroom', icon: 'classroom' },],
        down: [{ name: 'Profile', icon: 'profile' }, { name: 'To Do', icon: 'todo' }],
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const logout = async () => {
        setErrMsg();
        setSuccessMsg();

        if (user.authType == "teacher") {

        } else {
            const res = await studentLogout();
            if (res?.msg) {
                dispatch(removeUser());
            } else {
                setErrMsg(res.err);
                setTimeout(() => {
                    location.reload();
                }, 1000);
            };
        };
    };

    const drawer = (
        <div>
            <Typography variant="h6" noWrap component="div" sx={{ padding: '10px', display: 'flex', justifyContent: 'center' }}>
                <img width={80} src='https://student.saylaniwelfare.com/assets/logo-OpazD70S.png' />
            </Typography>
            <Divider />
            <List>
                {displayData.top.map((text, index) => {
                    const { name, icon } = text
                    return (
                        <ListItem key={index} disablePadding>
                            <ListItemButton onClick={() => icon === 'home' ? navigate('/') : navigate(path === 'teacher' ? `${path}${icon}` : `${icon}`)}>
                                <ListItemIcon>
                                    {icon === 'home' && <HomeIcon />}
                                    {icon === 'classroom' && <AssignmentOutlinedIcon />}
                                </ListItemIcon>
                                <ListItemText primary={name} />
                            </ListItemButton>
                        </ListItem>
                    )

                })}
            </List>
            <Divider />
            <List>
                {displayData.down.map((text, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton onClick={() => navigate(path === 'teacher' ? `${path}${text.icon}` : `${text.icon}`)}>
                            <ListItemIcon>
                                {text.icon === 'profile' && <PersonOutlineOutlinedIcon />}
                                {text.icon === 'todo' && <ListAltOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={logout}>
                        <ListItemIcon>
                            <LogoutOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ background: '#FBFBFB', py: 1.5, color: 'black', display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        UserName
                    </Typography>
                    <div>
                        <IconButton sx={{ color: '#0B73B7' }}>
                            <NotificationsNoneOutlinedIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#0B73B7' }}>
                            <PersonAddAltOutlinedIcon />
                        </IconButton>
                    </div>
                    {
                        user?._id ?
                            <p>{user.username}</p>
                            :
                            <Button sx={{
                                background: '#386BC0',
                                color: 'white',
                                padding: '10px',
                                ":hover": { background: '#23288D' }
                            }} onClick={() => navigate('/signin')} color="inherit">Login</Button>
                    }
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        background: '#FFFFFF',
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: '#FBFBFB' },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
            </Box>
            {successMsg && <CustomAlert txt={successMsg} isErrMsg={false} />}
            {errMsg && <CustomAlert txt={errMsg} isErrMsg={true} />}
        </Box>
    );
}
