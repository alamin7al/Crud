import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';
import { useState } from 'react';

import { Apps, Dashboard, LocalHospital, MobileFriendly, ShoppingBasketOutlined, SupervisedUserCircleOutlined } from '@material-ui/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import DeshbordHome from './DeshbordHome';
import MakeAdmin from './MakeAdmin';
import useAuth from '../Login/useAuth';
import Pay from './Pay';
import AddDoctor from './AddDoctor'
import AddYourMobile from './AddYourMobile';
const drawerWidth = 200;

function AllDeshbord(props) {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <div className="text-center fs-1 mt-5">
                <ShoppingBasketOutlined /> <Link className='text-decoration-none mt-3 text-capitalize' to="/appointement"><Button color="inherit">Mobile Shop </Button></Link>
                <div>
                    <Dashboard />
                    <Link className='text-decoration-none mt-3' to={`${url}`}><Button color="inherit">Dashbord</Button></Link>
                </div>
                <div>
                    <div>   <SupervisedUserCircleOutlined />

                        <Link className='text-decoration-none mt-3' to={`${url}/makeAdmin`}><Button color="inherit">MakeAdmin</Button></Link></div>
                    <div>
                        <LocalHospital />                <Link className='text-decoration-none mt-3' to={`${url}/addMobile`}><Button color="inherit">AddMobile</Button></Link>
                    </div>
                    <div>
                        <MobileFriendly />                <Link className='text-decoration-none mt-3' to={`${url}/yourMobile`}><Button color="inherit">AddYourMobile</Button></Link>

                    </div>
                </div>
            </div>
        </div>
    );

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
                <Toolbar sx={{ ms: 2 }}>
                    <Apps
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    ></Apps>

                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                <Switch>
                    <Route exact path={path}>
                        <DeshbordHome></DeshbordHome>
                    </Route>
                    <Route path={`${path}/payment/:payId`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addMobile`}>
                        <AddDoctor></AddDoctor>
                    </Route>
                    <Route path={`${path}/yourMobile`}>
                        <AddYourMobile></AddYourMobile>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

AllDeshbord.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AllDeshbord;