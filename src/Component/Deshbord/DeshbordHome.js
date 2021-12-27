import React from 'react';
import { useState } from 'react';
import Calender from '../Appointement/Calender';
import UsersubmitData from './UsersubmitData';

const DeshbordHome = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className="">
            <div className="row">
                <div className="col-md-5 col-sm-6">
                    <div className="">
                        <Calender date={date} setDate={setDate}></Calender>
                    </div>
                </div>
                <div className="col-md-7 col-sm-6">

                    <UsersubmitData date={date}></UsersubmitData>
                </div>

            </div>
        </div>
    );
};

export default DeshbordHome;