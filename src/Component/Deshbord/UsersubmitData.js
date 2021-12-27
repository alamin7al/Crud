import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Login/useAuth';

const UsersubmitData = ({ date }) => {
    const { user } = useAuth()
    const [userData, setUserData] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/mobile?email=${user?.email}&date=${date.toLocaleDateString()}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [date])
    return (
        <div>
            <h4> Please Select Your Date: {user?.displayName} Your Order {userData.length} </h4>
            <Table striped bordered hover size="sm">
                <thead className='w-100 h-100'>
                    <tr>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Mobile Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {userData.map(u =>

                    <tbody className='w-100 h-100'>
                        <tr className='w-100 h-100'>
                            <td>{u.name}</td>
                            <td>{u.time}</td>
                            <td>{u.phonename}</td>
                            <td>${u.price}</td>
                            <td> {u.payment ? 'paid' :
                                <Link to={`/deshbord/payment/${u._id}`}>
                                    <button className='btn btn-dark btn-sm'>Pay</button>
                                </Link>
                            }</td>

                        </tr>


                    </tbody>

                )}
            </Table>

        </div>
    );
};

export default UsersubmitData;