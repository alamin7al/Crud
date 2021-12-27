import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from './Header';
import useAuth from './Login/useAuth';
const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <Header></Header>

            <Navbar bg="light" expand="lg">
                {/* <Navbar.Brand href="#home">CRUD</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">


                        {/* <Link className='h-25 w-25  text-decoration-none' to='/home'>Home</Link> */}
                        <Link className=' text-decoration-none mx-2 text-success ' to='/user'>Create_User</Link>
                        <Link className='text-decoration-none text-primary ' to='/adduser'>Read_User</Link>




                    </Nav>
                    <Navbar.Collapse className="justify-content-around">
                        <Link to='/deshbord'>
                            <button className='btn btn-outline-dark '>Deshbord</button>
                        </Link>


                    </Navbar.Collapse>
                    <div className='justify-content-end me-3 d-flex'>
                        <Navbar.Text>
                            <Link className=' me-1 text-decoration-none text-primary ' to='/appointement'>Shop</Link>
                            {
                                user?.email ?
                                    <>
                                        <button className='btn btn-outline-dark btn-sm me-1' onClick={logOut}>LogOut</button>

                                    </>
                                    : <Link className='text-dark text-decoration-none fs-5' to='/login'>Login</Link>
                            }

                            <a className='text-uppercase font-monospace text-muted'>
                                {user?.displayName}
                            </a>
                        </Navbar.Text>
                    </div>
                </Navbar.Collapse>

            </Navbar>
        </div>
    );
};

export default Navigation;