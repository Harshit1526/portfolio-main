import React, { useRef, useState } from 'react';
import './Contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';

const Contact = () => {
  const [result, setResult] = useState(""); // Define the state for result message
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult(""); 
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult(""); 
      }, 5000);
    }
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>harshit2003s@gmail.com</h5>
            <a href="mailto:harshit2003s@gmail.com">Email me!</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>in/harshit</h5>
            <a href='https://www.linkedin.com/in/harshit-sharma15/' target='_blank' rel="noopener noreferrer">Message me on LinkedIn!</a>
          </article>
        </div>
        <form ref={form} onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          {result && <p>{result}</p>} 
        </form>
      </div>
    </section>
  );
}

export default Contact;
