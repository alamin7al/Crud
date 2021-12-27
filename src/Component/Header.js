import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h5 className='text-capitalize fw-bold lh-base fs-4'>
                <Link className=' text-decoration-none mx-2 text-success text-decoration-underline' to='/user'>

                    <em className="text-success ">C </em>
                    <em className="text-primary ">R </em> <em className="text-secondary  ">U </em>
                    <em className=" text-danger">D </em>

                </Link>
                ( <em className='text-success'>create ,</em>  <em className=' text-primary'>read ,</em> <em className='text-secondary '>update </em> and <em className='text-danger'>delete</em> )
                <em>&</em>
                <em><Link className='text-decoration-underline ms-1 text-decoration-none text-primary ' to='/appointement'>Mobile_Shop</Link></em>

            </h5>

        </div>
    );
};

export default Header;