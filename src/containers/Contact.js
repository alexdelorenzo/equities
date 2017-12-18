import React from 'react';
import ContactBackgroundLocation from '../assets/images/contact.jpg'

class Contact extends React.Component {
 
  render() {
    return (
      <div style={{
        background: `url(${ContactBackgroundLocation})`,
        height: 1000 + 'px',
        width: 100 + '%',
        backgroundOrigin: 'center',
        backgroundSize: 'contain'
      }}>
      <div style={{
        backgroundColor: '#a3a098',
        opacity: 0.8,
        height: 1000 + 'px',
        width: 50 + '%',
        float: 'right',
        backgroundOrigin: 'center',
        backgroundSize: 'contain'
      }}>
        <h1 style={{
            color: '#1d4a63',
            fontFamily: 'Montserrat',
            fontWeight: 800,
            fontSize: 9.8 + 'vw',
            opacity: 0.8,
            padding: 10 + 'px'
        }}>
            CONTACT
        </h1>
      </div>
    
      </div>
    );
  }
}

export default Contact;
