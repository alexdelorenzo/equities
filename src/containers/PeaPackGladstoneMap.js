import React from 'react';
import PeapackGladstoneMapLocation from '../assets/images/peapack-gladstone.jpg';
import PortfolioFooter from '../components/portfolio/PortfolioFooter';
import MapPin from '../components/portfolio/MapPin';

class PeaPackGladstoneMap extends React.Component {

  render() {

    return (
     <div>
        <img 
            src={PeapackGladstoneMapLocation}
            alt="Peapack Gladstone Map" 
            style={{
                width: 100 + '%'
            }}
        />
        <MapPin />
       
        <PortfolioFooter />
      </div>
    );
  }
}

export default PeaPackGladstoneMap;
