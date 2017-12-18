import React from 'react';
import PeapackGladstoneMapLocation from '../assets/images/peapack-gladstone.jpg';
import PortfolioFooter from '../components/portfolio/PortfolioFooter';
import MapPin from '../components/portfolio/MapPin';
import PeackPackGladstoneImageLocation from '../assets/images/modal_photo.png'

class PeaPackGladstoneMap extends React.Component {

  render() {

    return (
     <div
        style={{
          margin: 'auto',
        }}
     >
        <img 
            src={PeapackGladstoneMapLocation}
            alt="Peapack Gladstone Map" 
            style={{
                width: 100 + '%',
                margin: 'auto'
            }}
        />
        <MapPin 
          number={268} 
          address={"268 Dewey Rd"}
          top={1}
          left={9}
          formalAddress={'268 Dewey Rd.'}
          city={'PeaPack Gladstone'}
          description={'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec sed odio dui.'}
          heroImageLocation={PeackPackGladstoneImageLocation}
          location={'Cum sociis natoque penatibus'}
          architect={'Cum sociis'}
          client={'Cum sociis'}
        />
        <PortfolioFooter />
      </div>
    );
  }
}

export default PeaPackGladstoneMap;
