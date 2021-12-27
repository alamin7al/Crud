import React from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Login/useAuth';
import BookingModal from './BookingModal';

const Booking = ({ b, date, setSuccess }) => {
    const { user } = useAuth()
    const handleShow = () => setPhone(true);
    const [open, setPhone] = useState(false);
    const handleClose = () => setPhone(false);
    const { name, time, space, price, comapnyName, img } = b
    return (
        <>
            <div className="col-md-4 ">
                <Card className='mb-2 justify-content-center align-items-center' style={{ width: '18rem' }}>
                    <Card.Img variant="top" className='w-75 h-75' src={img} />
                    <Card.Body className='text-start'>
                        <Card.Title className='text-primary '>{name}</Card.Title>
                        <h6 className='word-wrap fw-normal'>
                            schedule: {time}
                        </h6>

                        <h5 className='word-wrap fw-normal'>
                            Made In: {comapnyName}
                        </h5>
                        <h5 className='word-wrap fw-normal'>
                            Price:  ${price}
                        </h5>
                        <h5 className='fw-bold'>
                            {space} SPACES AVAILABLE
                        </h5>
                        <div className="text-center">
                            {user?.email ? <Button variant="dark" onClick={handleShow}>
                                Order Now
                            </Button> : <Link className=' btn btn-dark btn-sm  text-decoration-none fs-5' to='/login'>Order Now</Link>
                            }
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <BookingModal
                b={b}
                date={date}
                setSuccess={setSuccess}
                open={open}
                handleClose={handleClose}
            ></BookingModal>
        </>
    );
};

export default Booking;