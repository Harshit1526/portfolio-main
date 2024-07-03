import React, { useState } from 'react';
import './Portfolio.css';
import ECOM from '../../assests/E-Commerce.png';
import STACK from '../../assests/Stack.png';
import MUSIC from '../../assests/Music-Player.png';
import FUDIE from '../../assests/fudie.png';
import QUOTE from '../../assests/Quote.png';
import WEATHER from '../../assests/weather.png';



const projects = [
  {
    id: 1,
    image: ECOM,
    title: 'E-Commerce',
    technology: 'MERN Stack (React.js, Node.js, Express.js, MongoDB)',
    view: 'https://e-commerce1523.netlify.app/',
    description: ' Crafted a cutting-edge Ecommerce solution with the MERN stack, merging MongoDB, Express.js,React.js, and Node.js seamlessly. Integrated user-friendly features for product management,authentication, and secure payment processing, enhancing the online shopping experience. Utilized modern web technologies to optimize performance, scalability, and user engagement, delivering a dynamic and intuitive platform.'
  },
  {
    id: 2,
    image: STACK,
    title: 'Stack-Overflow-Clone',
    technology: 'MERN Stack (React.js, Node.js, Express.js, MongoDB)',
    view: 'https://stack-overflow-harshit.netlify.app/',
    description: 'This is a clone of StackOverflow website. This project was created using MERN Stack. This is an web where you do usuall things you do on stackoverflow, you can ask question review it or give the votes to the answer, for frontend reactjs is used and Backend nodejs is use and for data storage mongodb is used.'
  },
  {
    id: 3,
    image: MUSIC,
    title: 'Music-player',
    technology: 'React Js',
    view: 'https://vusic-music-player.netlify.app/',
    description: 'Employing React.js, I made an music player platform, harmonizing audio playback with visually captivating imagery. This project underscores my adeptness in crafting interactive interfaces and harnessing cutting-edge web technologies to deliver captivating digital experiences.'
  },

  {
    id: 4,
    image: FUDIE,
    title: 'Fudie',
    technology: 'MERN Stack (React.js, Node.js, Express.js, MongoDB)',
    view: 'https://fudie-del.netlify.app/',
    description: 'This is a full-stack project for a food delivery website. The project includes a user-facing frontend, an admin frontend, a backend, and payment integration using Stripe. The admin has full authority to manage food items, delivery information, and payment details.'
  },
  {
    id: 5,
    image: QUOTE,
    title: 'Quote App',
    technology: 'React Native, Quote API, Android Studio',
    view: 'https://github.com/Harshit1526/Quotes-App/',
    description: 'The Quote app was created to generate random Quote using Quote API online. This is an API based App to check how API works on the App. If someone click on the new Quote it generate new quotes all time using the API.'
  },
  {
    id: 6,
    image: WEATHER,
    title: 'Weather website',
    technology: 'Html, Css & Javascript',
    view: 'https://weather-website-seven-lyart.vercel.app/',
    description: 'This project is part of Responsive Web Design discoverinf real-time weather conditions worldwide with our intuitive website. Enter any country and access instant, accurate forecasts for informed decision-making. Your go-to destination for seamless global weather insights.'
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projectsToShow = projects.slice(currentIndex, currentIndex + 3);

  const handleNext = () => {
    if (currentIndex + 3 < projects.length) {
      setCurrentIndex(currentIndex + 3);
    }
  };

  const handlePrev = () => {
    if (currentIndex - 3 >= 0) {
      setCurrentIndex(currentIndex - 3);
    }
  };

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="portfolio__navigation portfolio__navigation-left">
        <div onClick={handlePrev} disabled={currentIndex === 0}>← Swipe Left</div>
      </div>

      <div className="container portfolio__container">
        {projectsToShow.map((project) => (
          <article key={project.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            {project.technology && <h5>{project.technology}</h5>}
            {project.view && (
              <h6>
                View Online: <a href={project.view} target="_blank" rel="noopener noreferrer">{project.title}</a>
              </h6>
            )}
            <small className='portfolio__desc'>
              {project.description}
            </small>
            <div className="portfolio__item-buttons">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <button>Github</button>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="portfolio__navigation portfolio__navigation-right">
        <div onClick={handleNext} disabled={currentIndex + 3 >= projects.length}>Swipe Right →</div>
      </div>
      <div className='portfolio__footer'>
        For more projects visit my <a href="https://github.com/Harshit1526" target="_blank" rel="noopener noreferrer">Github</a>
      </div>
    </section>
  );
}

export default Portfolio;