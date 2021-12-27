import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router-dom';
// import useAuth from '../Login/useAuth';
import img from '../../img/images.png'
import { EmailOutlined, EmailRounded, HomeOutlined, InsertDriveFileOutlined, NfcOutlined, PhoneMissedOutlined } from '@material-ui/icons';
import Navigation from '../Navigation';
const UpdateUser = () => {
    const history = useHistory()
    const { id } = useParams()
    const [updateUser, setUpdateUser] = useState({})
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUpdateUser(data)
            })
    }, [id])
    const onSubmit = data => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 0) {
                    alert('updated SuccessFully')
                    history.push('/adduser')
                }
            })
    }
    return (
       <>
       <Navigation></Navigation>
       <div className='container my-2 text-start shadow-sm p-3 mb-5 bg-body rounded'>
            <hr />
            <h4 className='lh-base font-monospace fw-normal text-capitalize  fs-4'>Hello <em className='text-danger fs-4'>
                {updateUser?.name}
            </em>  Are You Sure You Update Do It.Now Available You Can Update Information Now   </h4>
            <div className="row">
                <div className="col-md-7">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form className='w-100 mx-auto text-start'>
                            {updateUser?.name && <Form.Group className="mb-3" >
                                <Form.Label >Your Name
                                <InsertDriveFileOutlined className='text-success ms-2 fs-2'></InsertDriveFileOutlined>

                                </Form.Label>
                                <Form.Control defaultValue={updateUser?.name} {...register("name")} placeholder="Enter Name" />
                            </Form.Group>}
                            {updateUser?.email && <Form.Group className="mb-3" >
                                <Form.Label>Email address
                                <EmailOutlined className='text-success ms-2 fs-2'></EmailOutlined>

                                </Form.Label>
                                <Form.Control defaultValue={updateUser?.email}  {...register("email")} placeholder="Enter email" />
                            </Form.Group>}
                            {updateUser?.number && <Form.Group className="mb-3" >
                                <Form.Label>PHone Number
                                <PhoneMissedOutlined className='text-success ms-2 fs-2'></PhoneMissedOutlined>

                                </Form.Label>
                                <Form.Control defaultValue={updateUser?.number} {...register("number")} placeholder=" Enter number" />
                            </Form.Group>}
                            {updateUser?.address && <Form.Group className="mb-3" >
                                <Form.Label>Address
                                <HomeOutlined className='text-success ms-2 fs-2'></HomeOutlined>

                                </Form.Label>
                                <Form.Control defaultValue={updateUser?.address} {...register("address",)} placeholder="Enter Address" />
                            </Form.Group>}
                            {updateUser?.relegion && <Form.Group className="mb-3" >
                                <Form.Label>Relegion
                                <NfcOutlined className='text-success ms-2 fs-2'></NfcOutlined>

                                </Form.Label>
                                <Form.Control defaultValue={updateUser?.relegion} {...register("relegion",)} placeholder="Enter Relegion" />
                            </Form.Group>}
                        </Form>
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input className='btn btn-success' type="submit" />
                    </form>
                </div>
                <div className="col-md-5 d-flex align-items-center justify-contenet-center">
                    <div className=' '>
                        <div className=''>

                            <em className='my-5 lh-base font-monospace fw-normal text-capitalize text-start fs-4'>
                                If you want, you can update all the information of the field. If you want, you can do one.
                            </em>
                            <img src={img} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default UpdateUser;