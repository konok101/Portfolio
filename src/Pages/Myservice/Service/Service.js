import React from 'react';
import webDesign from '../../../Images/c-web.png'
import webDesignCom from '../../../Images/design.png'
import webDesignFull from '../../../Images/javascript.png'
import './Service.css'

const Service = () => {
    return (
        <div id='service' className="container pt-5">
            <div className='row gx-5  pt-3'>
             <h1>My services</h1> 
                <div className="web col-lg-4 shadow p-3 mb-5  rounded">
                    <h1>Web Desingn</h1>
                    <img width="250px" height="200px" src={webDesign} alt="" />
                    <p className='p-5 pb-2 pt-0'>Only design. In this package I will make a design for   website. I will make five to seven section for  <span className='text-danger text-bold'>  $100</span></p>
                    <p className='mb-0 w-75 ms-5 code'> <a className='text-decration-none' target="_" href="https://www.linkedin.com/in/konok-majamder/">Hire me</a></p>
                </div>
                <div className="web col-lg-4 shadow p-3 mb-5  rounded">
                    <h1>Web development</h1>
                    <img width="250px" height="200px" src={webDesignCom} alt="" />
                    <p className='p-5 pb-2 pt-0'>Development. In this package I will make  to develop for your website Connect database   for   <span className='text-danger text-bold'>  $300</span></p>
                    <p className='mb-0 w-75 mt-2 ms-5 code'> <a target="_" href="https://www.linkedin.com/in/konok-majamder/">Hire me</a></p>
                </div>
                <div className="web col-lg-4 shadow p-3 mb-5  rounded">
                    <h1>Full Stack Web</h1>
                    <img width="250px" height="200px" src={webDesignFull} alt="" />
                    <p className='p-5 pb-2 pt-0'>Full website provide. Responsive website and connect database and complete backend part for<span className='text-danger text-bold'>  $600</span></p>
                    <p className='mb-0 w-75  ms-5 code'> <a target="_" href="https://www.linkedin.com/in/konok-majamder/">Hire me</a></p>
                </div>
            </div>

        </div>
    );
};

export default Service;