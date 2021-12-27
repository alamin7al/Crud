import React from 'react';
import { Form, } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import { useHistory } from 'react-router-dom';
import useAuth from '../Login/useAuth';

const AddDoctor = () => {
    const { user } = useAuth()
    // const history = useHistory()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/usermobile', {
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

                }
            })
    }
    return (

        <>
            <div className='container w-100 h-100 shadow-base p-3 mb-5 bg-body rounded'>
                <h3>Hello <em className='text-primary fs-3'>
                    {user?.displayName}
                </em>  Now You Add Mobile  </h3>
                <hr />
                <div className="row">
                    <div className="col-md-7 text-start">
                        <form className='w-100 h-100' onSubmit={handleSubmit(onSubmit)}>
                            <Form className=' mx-auto text-start fst-italic fs-5 p-1'>
                                <Form.Group className="mb-3 " controlId="formGroupEmail">
                                    <Form.Label >  Mobile Name
                                    </Form.Label>
                                    <Form.Control {...register("name")} placeholder="Mobile Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Price
                                    </Form.Label>
                                    <Form.Control  {...register("price")} placeholder="Enter Price" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Image Src
                                    </Form.Label>
                                    <Form.Control  {...register("image")} placeholder="Image Src" />
                                </Form.Group>
                            </Form>
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='btn btn-success ' type="submit" />
                        </form>
                    </div>

                </div>

            </div>
        </>
    );
};


export default AddDoctor;
{/* <img src="https://i.ibb.co/HCqKymz/myimg.jpg" */ }
// <img src="https://i.ibb.co/YBdBL8J/myimg2.jpg" 