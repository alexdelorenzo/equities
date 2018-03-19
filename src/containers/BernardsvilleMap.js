import React from 'react';
import BernardsvilleMapLocation from '../assets/images/maps/bernardsville-tax-map.jpg';

import MapPage from './MapPage';

class BernardsvilleMap extends React.Component {
  render() {
    return (
      <MapPage
        name="Bernardsville"
        image={BernardsvilleMapLocation}
        imageAlt="Bernardsville Map"
        heading="Bernardsville"
      />
    );
  }
}

export default BernardsvilleMap;
