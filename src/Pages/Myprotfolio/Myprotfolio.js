import React from 'react';
import football from '../../Images/football.png'
import bank from '../../Images/bank.png'
import './Myprotfolio.css'
const Myprotfolio = () => {
    return (
        <div   >
    
          
            <div id='protfolio' className='container '>
                <p className='protfolio-title'>My Portfolio</p>
                <div className="row d-flex justify-content-between">
                    <div className="col-lg-5 p-3  shadow p-3 mb-5  rounded">
                        <img height="300px" width="300px" src={bank} alt="" />
                        <p className='ps-5'>Its BAnk website. In this bank use html, css, javascript, es6. In this website user depsoit amount, withdrew amount. And show all details </p>
                        <div className='d-flex justify-content-between mt-2'>
                            <p className='code'> <a href=" https://github.com/konok101/Bank-account" >Code </a></p>
                            <p className='code'> <a href="https://konok101.github.io/Bank-account/index.html" >Live</a></p>
                        </div>
                    </div>
                    <div className="col-lg-5 ms-5 shadow p-3 mb-5  rounded">
                        <img height="300px" width="300px" src={football} alt="" />
                        <p className='ps-5'>This is football player information website.  In This website using HTML, CSS, BOOTSTRAP. THis is Responsive website.  </p>
                        <div className='d-flex justify-content-between mt-2'>
                            <p className='code'> <a href="https://github.com/konok101/Football-player" >Code </a></p>
                            <p className='code'> <a href="https://football-assignment-copa.netlify.app/" >Live</a></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Myprotfolio;