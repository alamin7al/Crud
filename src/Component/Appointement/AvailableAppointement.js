import React from 'react';
import './Available.css'
import { useState } from 'react';
import img1 from '../../img/product-1.png'
import img2 from '../../img/product-2.png'
import img3 from '../../img/product-3.png'
import img4 from '../../img/product-4.png'
import img5 from '../../img/product-5.png'
import img6 from '../../img/product-6.png'
import img7 from '../../img/Nokia-Max-Pro-2020.jpg'
import img8 from '../../img/images (3).jpg'
import img9 from '../../img/images (5).jpg'
import Booking from './Booking';
import Filter from './Filter';
const bookings = [
    {
        id: 1,
        name: 'Samsung Galaxy F62',
        time: '08.00 AM - 09.00 AM',
        img: img2,
        price: 20,
        match: 'samsung',
        space: 10,
        comapny: 'South',
        comapnyName: 'South Korean',
        color: 'blue',

    },
    {
        id: 2,
        name: ' iPhone 13 Pro',
        time: '09.00 AM - 10.00 AM',
        img: img1,
        match: 'iPhone',
        price: 15,
        space: 8,
        comapnyName: 'Apple Inc. ',
        comapny: 'Apple',
        color: 'blue',
    },
    {
        id: 3,
        name: 'Xiaomi Redmi 10 Prime	',
        time: '10.00 AM - 11.00 AM',
        img: img3,
        match: 'xiaomi',
        price: 17,
        space: 9,
        comapny: 'Chinese',
        comapnyName: 'Chinese electronics company',
        color: 'calery ',
    },
    {
        id: 4,
        name: 'Realme C11 2021 64GB	',
        time: '11.00 AM - 12.00 PM',
        img: img4,
        match: 'realme',
        price: 19,
        comapnyName: 'Chinese electronics company',

        space: 5,
        comapny: ' Chinese ',
        color: 'calery',
    },
    {
        id: 5,
        name: 'Xiaomi Redmi Note 11 Pro	',
        time: '06.00 PM - 07.00 PM',
        img: img5,
        match: 'xiaomi',
        price: 25,
        comapnyName: 'Chinese electronics company',

        space: 10,
        comapny: 'Chinese',
        color: 'pink',


    },
    {
        id: 6,
        name: ' OnePlus Nord 2 Price',
        time: '07.00 PM - 08.00 PM',
        img: img6,
        price: 35,
        match: 'plus',
        space: 10,
        comapny: 'Chinese smartphone brand',
        comapnyName: 'Chinese',
        color: 'plum'
    },
    {
        id: 7,
        name: ' Nokia XR20',
        time: '09.00 PM - 10.00 PM',
        img: img7,
        price: 46,
        match: 'Nokia',
        space: 10,
        comapnyName: 'Chinese smartphone brand',
        comapny: 'HMDled',
        color: 'plum'
    },
    {
        id: 8,
        name: '  Nokia C30',
        time: '04.00 PM - 07.00 PM',
        img: img8,
        price: 35,
        match: 'Nokia',
        space: 65,
        comapnyName: 'Chinese smartphone brand',
        comapny: 'Chinese',
        color: 'pink'
    },
    {
        id: 9,
        name: ' Nokia C20',
        time: '03.00 AM - 04.00 AM',
        img: img9,
        price: 89,
        match: 'Nokia',
        space: 10,
        comapnyName: 'Chinese smartphone brand',
        comapny: 'Chinese',
        color: 'pink'
    },
]

const AvailableAppointement = ({ date }) => {
    const [success, setSuccess] = useState(false)
    const [mobileData, setmobileData] = useState(bookings)


    const filter = (name) => {
        if (name === 'all') {
            setmobileData(bookings)
            return
        }
        const newItems = bookings.filter((service) => service.match === name)
        setmobileData(newItems)

    }
    const comapnyfilter = (name) => {
        if (name === 'all') {
            setmobileData(bookings)
            return
        }
        const newItems = bookings.filter((service) => service.comapny === name)
        setmobileData(newItems)

    }
    const colorfilter = (name) => {
        if (name === 'all') {
            setmobileData(bookings)
            return
        }
        const newItems = bookings.filter((service) => service.color === name)
        setmobileData(newItems)

    }



    return (
        <>
            <div className="container">
                <h4>Available Appointement <em className='text-primary'> {date.toDateString()}</em> </h4>
                {success &&
                    <div class="alert alert-primary" role="alert">
                        Order SuccessFully
                    </div>
                }
                <div className="row">
                    <div className="col-md-2">
                        <Filter
                            comapnyfilter={comapnyfilter}
                            colorfilter={colorfilter}
                            filter={filter}
                        ></Filter>

                    </div>
                    <div className="col-md-10">
                        <div className="row ma ms-2">
                            {mobileData.map(b => <Booking
                                key={b.id}
                                b={b}
                                date={date}
                                setSuccess={setSuccess}
                            ></Booking>)}

                        </div>
                    </div>
                </div>
            </div>


        </>

    );
};

export default AvailableAppointement;