import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import useAuth from '../Login/useAuth';

const AddYourMobile = () => {
    const { user } = useAuth()
    const [yourMobile, setYourMobile] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/usermobile')
            .then(res => res.json())
            .then(data => setYourMobile(data))
    }, [])
    return (
        <div>
            <h3>Your Name <em className='text-primary fs-3'>
                {user?.displayName}
            </em> And Your Email <em className='text-primary fs-3'>
                    {user?.email}
                </em> </h3>
            <div className="row">
                {
                    yourMobile.map(y =>
                        <div className="col-md-6">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={y.image} />
                                <Card.Body>
                                    <Card.Title className='text-capitalize text-start fs-4'>Mobile Name{y.name}</Card.Title>
                                    <Card.Text className='text-capitalize text-start fs-4'>
                                        Price: ${y.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AddYourMobile;