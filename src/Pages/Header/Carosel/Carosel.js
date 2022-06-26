
import React from 'react';
import fbs from '../../../Images/fb.png'
import linkdin from '../../../Images/linkding.png'
import github from '../../../Images/github.png'
import  twiter from '../../../Images/twitwe.png'
import carosel from '../../../../src/Images/konoks.JPG';
import './carosel.css';



const Carosel = () => {
    return (

        <div id='About' className="container">
            <span id='home'></span>
            <div className="row shadow p-3 mb-5 bg-white rounded ">
                <div className='col-lg-8 mt-5 shadow p-3 mb-5 bg-white rounded'>
                    <span> <i className=''>Hy! I'm</i> <br />
                        <h2 className='text-warning m-0'> Konok Majamder.</h2></span>
                    <p>I am always ready to learn any technology or language.
                        A highly dedicated, disciplined and self-learning individual
                        looking to expand my horizons in the field of Web design and Development.
                        I’ m expert in HTML, CSS, Bootstrap, JavaScript, ES6, React, Firrebase, MongoDB,
                        Node.js , Express.js etc.</p>


                </div>

                <div className='col-lg-4 shadow mt-5 p-3 mb-5 bg-white rounded about-img' >
                    <img className='or' width="300px" src={carosel} alt="" />

                    <div class="d-flex gap-3">
                        <div class="d-flex gap-3 ms-5">
                            <div className='d-flex justify-content-center '>
                                <a className='ms-5' target="_" href="https://www.facebook.com/profile.php?id=100014332999278"> <img width='30px' src={fbs} alt="" /></a>
                                <a className='ms-3'target="_" href="https://www.linkedin.com/in/konok-majamder/"> <img width='30px' src={linkdin} alt="" /></a>
                                <a className='ms-3'target="_" href="https://github.com/konok101"> <img width='30px' src={github} alt="" /></a>
                                <a className='ms-3'target="_" href="https://twitter.com/MajamderK"> <img width='30px' src={ twiter} alt="" /></a>

                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carosel;