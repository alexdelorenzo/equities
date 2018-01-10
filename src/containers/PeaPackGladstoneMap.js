import React from 'react';
import PeapackGladstoneMapLocation from '../assets/images/peapack-gladstone.jpg';
import MapPin from '../components/portfolio/MapPin';
import PeackPackGladstoneImageLocation from '../assets/images/modal_photo.png'
var contentful = require('contentful')

class PeaPackGladstoneMap extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          entries: [],
          openDict: {}
        };
    
    }
    client = contentful.createClient({
      space: 'h6j5qaecf4bi',
      accessToken: '60b882d2e141112b676c9446202ad4afb29121fab9b9e62ce5efe5ed01a964cf'
    })


    componentWillMount() {
      var that = this
      this.client.getEntries(
        {
          'content_type': 'mapPin',
          'fields.map': 'Peapack'
        }
      )
        .then(function (entries) {
          that.setState({entries: entries.items})
          var openDict = {}
          entries.items.forEach(function (entry) {
            if(entry.fields.id) {
              openDict[entry.fields.id] = false
            }
          })
          that.setState({openDict: openDict})

        })


    }
  closeMapModal(modalKey) {
    let newDict = this.state.openDict
    newDict[modalKey] = false
    this.setState({openDict: newDict})
  }
  openMapModal(modalKey) {
    let newDict = this.state.openDict
    newDict[modalKey] = true
    this.setState({openDict: newDict})
  }
  nextMapModal(modalKey) {
    let newDict = this.state.openDict
    let newDictArray = []
    for (var key in newDict) {
      newDictArray.push(key)
    }
    let currentModalPosition = newDictArray.indexOf(modalKey);
    currentModalPosition = currentModalPosition + 1;
    if (currentModalPosition > newDictArray.length -1) {
      currentModalPosition = 0
    }
    for (var keyValue in newDict) {
      newDict[keyValue] = false
    }
    newDict[newDictArray[currentModalPosition]] = true
    this.setState({openDict: newDict})
  }
  previousMapModal(modalKey) {
    let newDict = this.state.openDict
    let newDictArray = []
    for (var key in newDict) {
      newDictArray.push(key)
    }
    let currentModalPosition = newDictArray.indexOf(modalKey);
    currentModalPosition = currentModalPosition - 1;
    if (currentModalPosition < 0) {
      currentModalPosition = newDictArray.length -1
    }
    for (var keyValue in newDict) {
      newDict[keyValue] = false
    }
    newDict[newDictArray[currentModalPosition]] = true
    this.setState({openDict: newDict})
  }

  render() {
    return (
      <div>
     <div
        style={{
          margin: 'auto',

          width: 100 + '%',
          position: 'relative'
        }}
     >
        <img
            src={PeapackGladstoneMapLocation}
            alt="Peapack Gladstone Map"
            className="map-img"
            style={{
                width: 100 + '%',
            }}
        />
      <div className="map-actual-size">
        <h1 className="mobile-heading">PEAPACK-GLADSTONE</h1>
    
        {this.state.entries.map((entry) =>  {    
              return (
                <MapPin
                key={entry.fields.id}
                number={entry.fields.number}
                closeMapModal={() => this.closeMapModal(entry.fields.id)}
                openMapModal={() => this.openMapModal(entry.fields.id)}
                nextMapModal={() => this.nextMapModal(entry.fields.id)}
                previousMapModal={() => this.previousMapModal(entry.fields.id)}
                address={entry.fields.addressName}
                top={entry.fields.top}
                left={entry.fields.left}
                open={this.state.openDict[entry.fields.id]}
                formalAddress={entry.fields.addressName}
                city={entry.fields.city}
                description={entry.fields.description}
                heroImageLocation={entry.fields.heroImage.fields.file.url}
                location={entry.fields.locationName}
                architect={entry.fields.architect}
                client={entry.fields.client}
              />
              )
            }
          )
        }
        </div>
        </div>
      </div>
    );
  }
}

export default PeaPackGladstoneMap;
