import React from 'react';
import PeapackGladstoneMapLocation from '../assets/images/maps/Gladstone-tax-map-2B.jpg';

import MapPage from './MapPage';

class PeaPackGladstoneMap extends React.Component {
  render() {
    return (
      <MapPage
        name="Peapack"
        image={PeapackGladstoneMapLocation}
        imageAlt="Peapack Gladstone Map"
        heading="Peapack-Gladstone"
      />
    );
  }
}

export default PeaPackGladstoneMap;
