import React from 'react';
import MendhamMapLocation from '../assets/images/maps/mendham-tax-map-2.jpg';

import MapPage from './MapPage';
class MendhamMap extends React.Component {
  render() {
    return (
      <MapPage
        name="Mendham"
        image={MendhamMapLocation}
        imageAlt="Mendham Map"
        heading="Mendham"
      />
    );
  }
}

export default MendhamMap;
