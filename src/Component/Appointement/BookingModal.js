import React from 'react';
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import useAuth from '../Login/useAuth';
import { useForm } from "react-hook-form";

const BookingModal = ({ open, handleClose, b, date, setSuccess }) => {
    const { user } = useAuth()
    const { name, time, price } = b
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch('http://localhost:5000/mobile', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                    alert('Booking SuccessFully')
                    handleClose()
                }
            })
    }
    return (
        <>
            <Modal show={open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title> {name} </Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Time</label>
                        <input
                            readOnly
                            defaultValue={time}{...register("time")}
                            class="form-control"
                        />
                    </div>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Mobile Name</label>
                        <input
                            readOnly
                            defaultValue={name}{...register("phonename")}

                            class="form-control"

                        />
                    </div>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Mobile Price</label>
                        <input
                            readOnly
                            defaultValue={price}{...register("price")}

                            class="form-control"

                        />
                    </div>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Name</label>
                        <input
                            defaultValue={user?.displayName}{...register("name")}

                            class="form-control"

                        />
                    </div>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Email</label>
                        <input
                            defaultValue={user?.email}{...register("email")}
                            class="form-control"
                        />
                    </div>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Phone Number</label>
                        <input
                            defaultValue="Your Telephone Number" {...register("number")}
                            class="form-control"

                        />
                    </div>
                    <div class="mb-1 w-75 mx-auto">
                        <label class="form-label">Date</label>
                        <input
                            readOnly
                            defaultValue={date.toLocaleDateString()} {...register("date")}
                            class="form-control"

                        />
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}

                    <input className='btn btn-dark ms-5' type="submit" />
                </form>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BookingModal;