/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import irupe from '../images/irupe.png';
import blackGithub from '../images/blackgithubicon.svg';
import blackLinkedin from '../images/blacklinkedinicon.svg';

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed');
      }
    };
    xhr.send(data);
  };

  return (
    <div>
      <section className="contact-container">
        <h3>Time to talk</h3>
        <div className="profileimg-container">
          <img src={irupe} alt="Irupé" />
          <div className="name-container">
            <h1>Irupé Pozo Graviz</h1>
            <h2>Frontend developer</h2>
          </div>
        </div>
        <div className="info-container">
          {!isSubmitted ? (
            <form
              action="https://formspree.io/f/mrgvvawb"
              method="POST"
              onSubmit={handleSubmit}>
              <label htmlFor="email">Your email:</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required />

              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={handleMessageChange}
                placeholder="Write your message here"
                required />
              <button type="submit">Send</button>
            </form>
          ) : (
            <p>Message sent successfully!</p>
          )}
        </div>
        <div className="icons">
          <div className="iconsgithub">
            <a href="https://github.com/IrupePozoGraviz">
              <img src={blackGithub} alt="button to github in black" />
            </a>
          </div>
          <div className="iconslinkedin">
            <a href="https://www.linkedin.com/in/irup%C3%A9-pozo-graviz-119112266/">
              <img src={blackLinkedin} alt="button to linkedin black" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
