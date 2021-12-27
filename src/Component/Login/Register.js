import React from 'react';
// import logins from '../../img/preview.jpg';
import { useState, } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    NavLink,
    Route,
    useHistory,
    Link,
    useParams,
    useLocation,
    useRouteMatch
} from "react-router-dom";
import useAuth from './useAuth';

const Register = () => {
    const { signInuser, loading, error, user } = useAuth()
    const [loginDate, setLoginData] = useState({})
    const location=useLocation()
    const history=useHistory()
    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginDate }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(newLoginData);
    }
    const handleOnSubmit = (e) => {
        e.preventDefault()
        if (loginDate.password !== loginDate.password2) {
            alert('not Matched')
            return
        }
        signInuser(loginDate.email, loginDate.password, loginDate.name, location,history)
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col col-md-6 w-50 mx-auto container my-5'>
                    <h2>Register</h2>
                    {!loading && <form onSubmit={handleOnSubmit}>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label ">Your Name</label>

                            <input
                                name='name'
                                className="form-control"
                                onBlur={handleOnBlur}
                                id="exampleInputPassword1" />
                        </div> 
                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Email</label>
                            <input
                                name='email'
                                type='email'
                                className="form-control"
                                onBlur={handleOnBlur}
                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">Your Password</label>
                            <input
                                name='password'
                                type="password" className="form-control"
                                onBlur={handleOnBlur}
                                id="exampleInputPassword1" />
                        </div>

                        <div className="mb-3 text-start">
                            <label for="exampleInputPassword1" className="form-label">ReType Your Password</label>
                            <input
                                name='password2'
                                type="password" className="form-control"
                                onBlur={handleOnBlur}
                                id="exampleInputPassword1" />
                        </div>
                        <button
                            className='btn btn-primary btn-lg'
                            type='submit'
                        >Login</button>
                        <br />
                        <br />
                        <NavLink
                            style={{ textDecoration: 'none' }}

                            to='/login'><p
                                className=' fs-4'
                            >Already Register? Please Login</p>
                        </NavLink>

                    </form>}

                    {loading && <div>
                        <div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div><div class="spinner-grow text-dark" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>}
                    {user?.email &&
                        <div class="alert alert-primary" role="alert">
                            User Created SuccessFulyy
                        </div>
                    }
                    {error &&
                        <div class="alert alert-warning" role="alert">
                            {error}
                        </div>
                    }





                </div>
                <div className=' col-md-6'>
                    {/* <img src={logins} style={{ width: '100%' }} alt='' /> */}
                </div>
            </div>
        </div>
    );
};

export default Register;