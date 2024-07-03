import React, { useState, useEffect } from 'react';
import './Header.css';
import Action from './Action';
import Socials from './Socials';
import animationData from '../../lotties/dev1.json';
import { Player } from '@lottiefiles/react-lottie-player';

const roles = ['Full Stack Developer', 'Programmer', 'Software Engineer'];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [animationVisible, setAnimationVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setAnimationVisible(true);
    const timeout = setTimeout(() => {
      setAnimationVisible(false);
    }, 2000); 

    return () => clearTimeout(timeout);
  }, [roleIndex]);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Harshit Sharma</h1>
        <h5 className={`text-light ${animationVisible ? 'fade-in' : ''}`}>
          {roles[roleIndex]}
        </h5>
        <Action />
        
        <Socials />

        <div className='animation__container'>
          <Player className='animation__item'
            autoplay
            loop
            src={animationData}
          />
        </div>

        <a className='scroll__down' href="#contact">Scroll Down  →</a>
      </div>
    </header>
  );
}

export default Header;
