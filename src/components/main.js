import React from 'react'
import irupe from '../images/irupe.png'
import blackGithub from '../images/blackgithubicon.svg'
import blackLinkedin from '../images/blacklinkedinicon.svg'
import { Header } from './header';
import './css/headerandmain.css';

export const Main = () => {
  return (

    <div className="main-container">
      <div className="desktop">
        <Header />
        <section className="profile-image">
          <img src={irupe} alt=" Irupé" />

          <div className="profile-container">
            <h5>Irupé Pozo Graviz</h5>
            <h2>Frontend developer</h2>
          </div>
        </section>
      </div>
      <div className="profile-info">
        <p>Hola! I am a front-end developer with a
background in communication, education, human rights and health.
                In me, you will have a structured, inventive and solutions-based co-worker,
                whose experiences have made her a pedagogical and motivational leader.
                I am proficient in Swedish, English, Spanish and conversation level in Portuguese.
                As a person, I am positive and love to learn new things.
                Often, I am the one colleagues and friends come to for advice
                - as well as fun ideas!

        </p>
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

    </div>
  )
}
