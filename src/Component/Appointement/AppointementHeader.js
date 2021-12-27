import React from 'react';
import img from '../../img/istockphoto-1214561965-1024x1024.jpg'
import Calender from './Calender';
const AppointementHeader = ({date,setDate}) => {
    return (
        <div className='container'>
           <div className="row">
               <div className="col-md-6">
                   <Calender date={date} setDate={setDate}></Calender>
               </div>
               <div className="col-md-6">
                    <img src={img} className='img-fluid ' alt="" />
               </div>
           </div>
        </div>
    );
};

export default AppointementHeader;