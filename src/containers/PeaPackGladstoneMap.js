import React from 'react';
import PeapackGladstoneMapLocation from '../assets/images/peapack-gladstone.jpg';
import MapPin from '../components/portfolio/MapPin';
import PeackPackGladstoneImageLocation from '../assets/images/modal_photo.png'

class PeaPackGladstoneMap extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          openDict: {
            '268DeweyRd': false,
            '234Mendham': false,
            '5633ForestStreet': false,
          }
        };
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
        <MapPin
          number={268}
          closeMapModal={() => this.closeMapModal('268DeweyRd')}
          openMapModal={() => this.openMapModal('268DeweyRd')}
          nextMapModal={() => this.nextMapModal('268DeweyRd')}
          previousMapModal={() => this.previousMapModal('268DeweyRd')}
          address={"268 Dewey Rd"}
          top={20}
          left={40}
          open={this.state.openDict['268DeweyRd']}
          formalAddress={'268 Dewey Rd.'}
          city={'PeaPack Gladstone'}
          description={'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec sed odio dui.'}
          heroImageLocation={PeackPackGladstoneImageLocation}
          location={'Cum sociis natoque penatibus'}
          architect={'Cum sociis'}
          client={'Cum sociis'}
        />
        <MapPin
          number={234}
          closeMapModal={() => this.closeMapModal('234Mendham')}
          openMapModal={() => this.openMapModal('234Mendham')}
          nextMapModal={() => this.nextMapModal('234Mendham')}
          previousMapModal={() => this.previousMapModal('234Mendham')}
          address={"234 Mendham Rd"}
          top={12}
          left={42}
          open={this.state.openDict['234Mendham']}
          formalAddress={'234Mendham.'}
          city={'PeaPack Gladstone'}
          description={'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec sed odio dui.'}
          heroImageLocation={PeackPackGladstoneImageLocation}
          location={'Cum sociis natoque penatibus'}
          architect={'Cum sociis'}
          client={'Cum sociis'}
        />
        <MapPin
          number={564}
          closeMapModal={() => this.closeMapModal('5633ForestStreet')}
          openMapModal={() => this.openMapModal('5633ForestStreet')}
          nextMapModal={() => this.nextMapModal('5633ForestStreet')}
          previousMapModal={() => this.previousMapModal('5633ForestStreet')}
          address={"5633 Forest Street"}
          top={20}
          left={32}
          open={this.state.openDict['5633ForestStreet']}
          formalAddress={'5633ForestStreet.'}
          city={'PeaPack Gladstone'}
          description={'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Vestibulum id ligula porta felis euismod semper. Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Nullam id dolor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Donec sed odio dui.'}
          heroImageLocation={PeackPackGladstoneImageLocation}
          location={'Cum sociis natoque penatibus'}
          architect={'Cum sociis'}
          client={'Cum sociis'}
        />
    </div>
        </div>
      </div>
    );
  }
}

export default PeaPackGladstoneMap;
