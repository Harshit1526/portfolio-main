import React from 'react';
import './About.css';
import ME from '../../assests/gif avatar4.gif';
import {BiMedal, BiUser, BiFolder} from 'react-icons/bi';

const About = () => {
  return (
    <section id='about'>
        <h5>Get to know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt=" "/>
                </div>
            </div>
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <BiMedal className='about__icon'/>
                        <h5>Skills</h5>
                        <small>Full Stack Developer</small>
                    </article>
                    <article className='about__card'>
                        <BiUser className='about__icon'/>
                        <h5>Education</h5>
                        <small>TCET <br/> Electronics and Computer Science</small>
                    </article>
                    <article className='about__card'>
                        <BiFolder className='about__icon'/>
                        <h5>Hobbies</h5>
                        <small>Traveling, Cricket, Online Games</small>
                    </article>
                </div>
                <p>
                Hi, there! Nice to see you here, how are you doing? I'm Harshit Sharma, I'm from India (Mumbai) and my dream is to become a Sotware Engineer. I’m a fast learner and passionate about how technology can help us improve our life.I enjoy the challenges of developing comprehensive and user-friendly applications. My engineering education combined with online courses in the area of full-stack development a building projects to practice the acquired knowledge, because I believe that knowledge acquired without practice is of no value, has given me a great foundation of knowledge and skills.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  );
}

export default About;