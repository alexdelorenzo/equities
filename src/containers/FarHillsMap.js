import React from 'react';
import FarHillsMapLocation from '../assets/images/maps/Farhills-tax-map-2.jpg';

import MapPage from './MapPage';
class FarHillsMap extends React.Component {
  render() {
    return (
      <MapPage
        name="FarHills"
        image={FarHillsMapLocation}
        imageAlt="Far Hills Map"
        heading="Far Hills"
      />
    );
  }
}

export default FarHillsMap;
