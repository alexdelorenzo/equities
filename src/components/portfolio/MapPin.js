import React from 'react';
import {Tooltip} from 'antd';
import MapPinLocation from '../../assets/images/map-pin.png'

class MapPin extends React.Component {

  render() {

    return (
        <Tooltip 
            title="268 Dewey Rd"
            placement="right"
        >
        <div
            style={{
                position: 'absolute',
                top: 1 + '%',
                left: 9 + '%',
                cursor: 'pointer'
            }}
        >
            <img 
                src={MapPinLocation}
                alt="Map Pin" 
                style={{
                    maxWidth: 45 + 'px',
                }}
            />
            <p style={{
                position: 'absolute',
                color: 'white',
                fontSize: 16 + 'px',
                top: 8 + 'px',
                left: 7 + 'px'
            
            }}>
                268
            </p>
        </div>
     </Tooltip>

    );
  }
}

export default MapPin;
