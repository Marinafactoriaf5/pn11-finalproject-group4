import React from 'react';
import './ShareButton.css';
import FacebookLogo from '../../assets/facebook.png';
import WhatsappLogo from '../../assets/whatsapp.png';
import TwitterLogo from '../../assets/twitter.png';

const EventShareButton = ({ eventId }) => {
  const urlEvento = `https://localhost:5173/event/${eventId}`;

  const compartirEnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlEvento)}`, '_blank');
  };

  const compartirEnWhatsApp = () => {
    window.open(`whatsapp://send?text=Mira este increíble evento! ${encodeURIComponent(urlEvento)}`, '_blank');
  };

 /*  const compartirEnInstagram = () => {
    // Reemplaza con la lógica o el enlace directo para Instagram
    alert("Para compartir en Instagram, publícalo manualmente usando la URL del evento.");
  };
 */
  const compartirEnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=Mira este increíble evento!&url=${encodeURIComponent(urlEvento)}`, '_blank');
  };

  return (
    <div className='shareEventButtons'>
      <span onClick={compartirEnFacebook} style={{ cursor: 'pointer' }}>
        <img src={FacebookLogo} alt="Icono Facebook" width="30" height="30" />
      </span>

      <span onClick={compartirEnWhatsApp} style={{ cursor: 'pointer', marginLeft: '10px' }}>
        <img src={WhatsappLogo} alt="Icono WhatsApp" width="30" height="30" />
      </span>

      {/* <span onClick={compartirEnInstagram} style={{ cursor: 'pointer', marginLeft: '10px' }}>
        <img src="icono-instagram.png" alt="Icono Instagram" width="30" height="30" />
      </span> */}

      <span onClick={compartirEnTwitter} style={{ cursor: 'pointer', marginLeft: '10px' }}>
        <img src={TwitterLogo} alt="Icono Twitter" width="30" height="30" />
      </span>

    </div>
  );
};

export default EventShareButton;