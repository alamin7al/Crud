import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DeleteOutlineOutlined, EditOutlined, } from "@material-ui/icons";
import useAuth from '../Login/useAuth';
import Navigation from '../Navigation';

const Adduser = () => {
    const { user } = useAuth()
    const [users, setUser] = useState([])
    const [single, setSingle] = useState([])
    const [searc,setSearch]=useState('')
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }, [])
    const handleDelte = (id) => {
        const procced = window.confirm('are You Sure You Wante Delete')
        if (procced) {
            fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete SuccessFully')
                        const remainingUser = users.filter(user => user._id !== id)
                        setUser(remainingUser)
                    }
                })
        }
    }
    const handleDelteSingle = (id) => {
        const procced = window.confirm('are You Sure You Wante Delete')
        if (procced) {

            fetch(`http://localhost:5000/single/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('delete SuccessFully')
                        const remainingUser = single.filter(user => user._id !== id)
                        setUser(remainingUser)
                    }
                })
        }
    }
    useEffect(() => {
        const url = `http://localhost:5000/single?email=${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingle(data))
    }, [user.email, single])
 


    return (
       <>
       <Navigation></Navigation>
        <div className='mx-5 shadow-sm p-3 mb-5 bg-body rounded'>
            
            <hr />
           <div className="my-4 text-start">
           <em className=' lh-base font-monospace fw-normal text-capitalize  fs-4'>
                Here you can see everyone's information if you are not logged in. If you are logged in  then you can only see your data . You can delete someone from here if you want, you can update someone if you want. You are happy
            </em>
           </div>

            {user?.email ? <div>
                {single.map(s =>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> Name</th>
                                <th> Email</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Relegion</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">{single.length}</th>
                                <td>{s?.name}</td>
                                <td>{s?.email}</td>
                                <td>{s?.number}</td>
                                <td>{s?.address}</td>
                                <td>{s?.relegion}</td>
                                <div className='d-flex justify-content-center'>

                                    <button onClick={() => handleDelteSingle(s?._id)} className='ms-1 btn btn-danger btn-sm'>                               <DeleteOutlineOutlined />
                                    </button>
                                    <Link
                                        to={`/emailusers/${s?._id}`}

                                    >
                                        <button className='ms-1 btn btn-success btn-sm'> <EditOutlined /></button>
                                    </Link>
                                </div>
                            </tr>

                        </tbody>

                    </Table>
                )}
            </div> : <div>
                {
                    users.map(u =>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th>Relegion</th>
                                    <th className=''> <em className='text-danger'>Delete</em> & <em className='text-primary'>
                                    Update</em> </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>

                                    <td>{u.name}</td>
                                    <td>{u.email}</td>
                                    <td>{u.number}</td>
                                    <td>{u.address}</td>
                                    <td>{u.relegion}</td>
                               
                                    <div className='d-flex justify-content-center'>

                                        <button onClick={() => handleDelte(u._id)} className='ms-1 btn btn-danger btn-sm'>                               <DeleteOutlineOutlined />
                                        </button>
                                        <Link to={`/users/${u._id}`}>

                                            <button className='ms-1 btn btn-success btn-sm'> <EditOutlined /></button>
                                        </Link>
                                    </div>
                                </tr>

                            </tbody>

                        </Table>
                    )
                }
            </div>}


        </div>
       </>
    );
};

export default Adduser;