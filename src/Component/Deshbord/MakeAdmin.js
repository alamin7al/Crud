import React from 'react';
import { useState } from 'react';
import useAuth from '../Login/useAuth';

const MakeAdmin = () => {
    const { user } = useAuth()
    const [email, setEmail] = useState('')
    const [adminSuccess, setadminSuccess] = useState(false)

    const handleOnblur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = { email }
        fetch('http://localhost:5000/emailcollection/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setadminSuccess(true)
                }
            }
            )
        e.preventDefault()

    }
    return (
        <div className='mt-5'>
            <h3 className='text-start text-muted text-capitalize text-monoscope'>  hello <em className='text-primary fs-4'> {user.displayName} </em>
                You can't make someone an admin if you want to if you want to make someone an admin. Then you need to be an admin first. However I have xyz@gmail.com password 123456
                You can make yourself an admin by logging in with this email. Then you get the benefits of admin

            </h3>
            <form className='' onSubmit={handleSubmit}>
                <div className="mb-3 text-start w-50 h-50 mx-auto fs-3">
                    <label for="exampleInputPassword1" className="form-label">Make Admin</label>
                    <input
                        name='email'
                        type="email" className="form-control"
                        onBlur={handleOnblur}
                    />
                </div>
                <button type='submit' className='btn btn-dark'>Submt</button>
                {adminSuccess &&
                    <div class="alert alert-primary" role="alert">
                        Make ADmin SuccessFulyy
                    </div>
                }
            </form>

        </div>
    );
};

export default MakeAdmin;