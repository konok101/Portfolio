import React from 'react';
import './Skill.css'

const Skill = () => {

    return (
        <div className='container' id='skill'>
 
 <section class="container my-5 py-5 ">
        <h1 id ="skill"class="text-center font">Skills</h1>
        <div class="skill-container bg-light border rounded-3  ">
                    <ul >
                        <li class="fs-5 html">HTML </li>
                        <li class="fs-5 css">CSS</li>
                        <li class="fs-5 bootstrap">Bootstrap</li>
                        <li class="fs-5 tailwind">Tailwind</li>
                        <li class="fs-5 js">Javascript</li>
                        <li class="fs-5 c">React</li>
                        <li class="fs-5 python">Python</li>
                        <li class="fs-5 java">java</li>
                        <li class="fs-5 php">PHP</li>
                        <li class="fs-5 react">Firebase</li>
                    </ul>
                </div>
            </section>

        </div>
    );
};

export default Skill;