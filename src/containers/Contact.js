import React from 'react';
import ContactBackgroundLocation from '../assets/images/maps/Map-of-Somerset-4-cropped.png';
import LocationBox from '../components/LocationBox';


class Contact extends React.Component {

  render() {
    return (
    <div>
        <LocationBox
            mainHeader=""
            subHeader="Contact"
            start="Home"
            end="Contact"
        />
        <div style={{
            background: `url(${ContactBackgroundLocation})`,
            height: 90 + 'vh',
            width: 100 + '%',
            backgroundOrigin: 'center',
            backgroundSize: 'cover'
        }}>
            <div className="map-overlay">
                <h1 className="contact-main-header">
                    CONTACT
                </h1>
                <div style={{
                    marginLeft: 10 + 'vw'
                }}>
                    <h3 className='contact-sub-header'>
                        MELILLO EQUITIES
                    </h3>
                    <br />
                    <h4 className='contact-sub-info' style={{letterSpacing: 4 + 'px'}}>
                        190 MAIN STREET,  <br />
                        STE. 202, <br />
                        GLADSTONE, NJ 07934
                    </h4>
                    <br />
                    <h3 className='contact-sub-header'>
                        CALL
                    </h3>
                    <h4 className="contact-sub-info">
                        1+908 234 9561
                    </h4>
                    <br />
                    <h3 className='contact-sub-header'>
                        EMAIL
                    </h3>
                    <h4 className='contact-sub-info' style={{paddingBottom: 25}}>
                        info@MelilloEquities.com
                    </h4>
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default Contact;
