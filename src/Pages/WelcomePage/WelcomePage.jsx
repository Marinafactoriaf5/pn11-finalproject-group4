import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomePage.css';
import Video from '../../assets/welcomeVideo.mp4'

const WelcomePage = () => {
  return (
    <div className="videoContainer">
      <video autoPlay loop muted>
        <source src={Video} type="video/mp4" />
      </video>
      <div className="content">
        <h1>¡Bienvenidx aventurerx!</h1>
        <Link to="/home">
          <button className='contentButton'>Presiona si estás preparadx para VIVIR</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
