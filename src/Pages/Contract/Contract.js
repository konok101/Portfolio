import React from 'react';
import './Contact.css';
import { Bounce } from "react-awesome-reveal";

const Contract = () => {
    return (
        <div>
            <section id='contact' class="contact ">
                <div className="container bg-primary shadow p-3 mb-5 rounded">
                    <div class="middle">
                        <h2>Contact Me</h2>
                        <hr />
                    </div>
                    <div class="contact-box text-white bg-info">
                        <form action="">
                            <div class="username">
                                <div class="name p-3">
                                    <input type="text" id="name" placeholder="Enter Your Name" />
                                </div>
                                <div class="email p-3">
                                    <input type="email" id="email" placeholder="Enter Your Email" />
                                </div>
                            </div>
                            <textarea className='p-3 ' placeholder="Your Message" name="" id="" cols="20" rows="5"></textarea>
                            <div class="cal m-0">

                                <input className='mb-5' type="submit" value=" Submit" />

                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contract;