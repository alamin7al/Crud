import React from 'react';
import { Form, } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import useAuth from '../Login/useAuth';
import img from '../../img/images.png'
import { EmailOutlined, EmailRounded, HomeOutlined, InsertDriveFileOutlined, NfcOutlined, PhoneMissedOutlined } from '@material-ui/icons';
import Navigation from '../Navigation';
const User = () => {
    const history = useHistory()
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('succesFull Added User')
                    history.push('/adduser')
                }
            })
    }
    return (

        <>
        <Navigation></Navigation>
            <div className='container w-100 h-100 shadow-base p-3 mb-5 bg-body rounded'>
                <hr />
                <div className="row">
                    <div className="col-md-7 text-start">
                        <form className='w-100 h-100' onSubmit={handleSubmit(onSubmit)}>
                            <Form className=' mx-auto text-start fst-italic fs-5 p-1'>
                                {user?.displayName ? <Form.Group className="mb-3 " controlId="formGroupEmail">
                                    <Form.Label className=''>Your Name
                                        <InsertDriveFileOutlined className='text-success ms-2 fs-2'></InsertDriveFileOutlined>

                                    </Form.Label>
                                    <Form.Control readOnly defaultValue={user.displayName} {...register("name")} placeholder="Enter Name" />
                                </Form.Group> : <Form.Group className="mb-3 " controlId="formGroupEmail">
                                    <Form.Label >  Your Name

                                        <InsertDriveFileOutlined className='text-success ms-2 fs-2'></InsertDriveFileOutlined>

                                    </Form.Label>
                                    <Form.Control defaultValue={user.displayName} {...register("name")} placeholder="Enter Name" />
                                </Form.Group>}
                                {user?.email ? <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address
                                        <EmailOutlined className='text-success ms-2 fs-2'></EmailOutlined>

                                    </Form.Label>
                                    <Form.Control readOnly defaultValue={user?.email}  {...register("email")} placeholder="Enter email" />
                                </Form.Group> : <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address
                                        <EmailOutlined className='text-success ms-2 fs-2'></EmailOutlined>
                                    </Form.Label>
                                    <Form.Control  defaultValue={user?.email}  {...register("email")} placeholder="Enter email" />
                                </Form.Group>}
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Phone Number
                                        <PhoneMissedOutlined className='text-success ms-2 fs-2'></PhoneMissedOutlined>

                                    </Form.Label>
                                    <Form.Control {...register("number", { required: true })} placeholder=" Enter number" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Address
                                        <HomeOutlined className='text-success ms-2 fs-2'></HomeOutlined>
                                    </Form.Label>
                                    <Form.Control {...register("address", { required: true })} placeholder="Enter Address" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Relegion
                                        <NfcOutlined className='text-success ms-2 fs-2'></NfcOutlined>
                                    </Form.Label>
                                    <Form.Control {...register("relegion", { required: true })} placeholder="Enter Relegion" />
                                </Form.Group>
                            </Form>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-success ' type="submit" />
                        </form>
                    </div>
                    <div className="col-md-5 ">
                        <div className=' d-flex align-items-center justify-contenet-center '>
                            <div>
                                <h6>
                                    <ul className='text-start  text-capitalize lh-base fs-5 text-dark text-break fw-bolde'>
                                        <li> <em className='lh-base mb-2'>If the user wants, he can add someone with information.</em>
                                        </li>
                                        <li>
                                            <em className='lh-base mb-2'> He can add many people if he wants. If he doesn't like it, he can delete it.</em>
                                        </li>
                                        <li>
                                            <em className='lh-base mb-2'>  If you want to do something update, you can do that too.
                                                The big surprise is that if a user logs in or registers,</em>
                                        </li>
                                        <li>
                                            <em className='lh-base mb-2'> his name will automatically appear in his form and his email will be sent.</em>

                                        </li>
                                        <li>
                                            <em className='lh-base mb-2'>  Then I can arrange his table by adding some more information.
                                                If someone logs in, he will only be able to see his information.</em>
                                        </li>
                                        <li>
                                            <em className='lh-base mb-2'>Adding someone will take you to the Read user. You can go there and see what you have added</em>
                                        </li>
                                    </ul>
                                </h6>


                                {/* <img src={img} className='w-100 h-100' alt="" /> */}
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default User;