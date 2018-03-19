import React from 'react';
import BernardsvilleMapLocation from '../assets/images/maps/Bernardsville-tax-map-2.jpg';

import MapPage from './MapPage';

class BernardsvilleMap extends React.Component {
  constructor(props) {
    super(props);

  }


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
