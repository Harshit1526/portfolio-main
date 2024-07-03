import React from 'react';

const Action = () => {
  return (
    <div className='action'>
      <a 
        className='btn' 
        href={process.env.REACT_APP_RESUME_LINK}
        target="_blank" 
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
      <a className='btn btn-primary' href="#contact">
        Have a talk? Hit me up!
      </a>
    </div>
  )
}

export default Action;