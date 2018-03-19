import React from 'react';
import {Tooltip, Modal, Row, Col, Icon, Badge} from 'antd';
import PeapackGladstoneMapLocation from '../assets/images/peapack-gladstone.jpg';
import MapPin from '../components/portfolio/MapPin';

var contentful = require('contentful')

class MapPage extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
          entries: [],
          openDict: {},
          townModal: false,
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
          'fields.map': this.props.name
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
  showTownModal() {

    this.setState({ townModal: true });
  }
  handleCancel() {
    this.setState({ townModal: false });
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
            src={this.props.image}
            alt={this.props.imageAlt} //"Peapack Gladstone Map"
            className="map-img"
            style={{
                width: 100 + '%',
            }}
        />
      <div className="map-info" onClick={this.showTownModal.bind(this)}>
        <span className="map-info-icon">
          i
        </span>
      </div>
      <div className="map-actual-size">
        <h1 className="mobile-heading">{this.props.heading}</h1>

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
                heroImageLocation={entry.fields.heroImage.fields.file.url + '?fl=progressive'}
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
        <Modal
          visible={this.state.townModal}
          footer={false}
          maskClosable={true}
        >
          <div
              onClick={this.handleCancel.bind(this)}
              style={{
                  float: 'right',
                  padding: 20 + 'px',
                  cursor: 'pointer'
              }}
          >
            <div className="modal-close">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                 viewBox="0 0 25 25" style={{ enableBackground: 'new 0 0 25 25', color: '#b3b3b3', width: 25, marginLeft: 5}}>
              <path d="M13.2,12.5L24.4,1.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0L12.5,11.8L1.2,0.5C1,0.4,0.7,0.4,0.5,0.5S0.4,1,0.5,1.2
                l11.3,11.3L0.5,23.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.2,0,0.3-0.1l11.3-11.3l11.3,11.3c0.1,0.1,0.2,0.1,0.3,0.1
                s0.2,0,0.3-0.1c0.2-0.2,0.2-0.5,0-0.7L13.2,12.5z"/>
              </svg>
            </div>
          </div>
          <div className="paragraph" style={{padding: '80px 10vw 80px 10vw'}}>
            <div style={{ textAlign: 'center', paddingBottom: 40 }}>
              <h3 className="portfolio-section-header">THE TOWN OF</h3>
              <h3 className="portfolio-callout">{this.props.heading}</h3>
            </div>
            <p>Num verrumq uuntia quiduciatem harcipsae nem niminullor sint rendunt, eiunt, quaest eos ipid qui di quideli caborep udametur as eum imus volor se ped quate voluptatiis sandandae nos non nesto mo temquae odis as endeles doloreptiis reicidem faccusc iaectem que et antiur, sitis ea pernati coreius aliquia vel expel molorentiati conserf erumquibus dollatia aborend aepuda voluptatur aliti ullantur maios est ist alicte explate nonsed ut.</p>
            <br />
            <p>eum reicaborror aut aut Quid quodi occab imi, consend iciaspictore nobisin ciduci aut qui quis planto voloreste debis in nus eost et explign ihictia spernates a que nimolut plaut aute alic temoditati tota si amet omnim volendipis ea sitatibus accaborrum re peri nectatquiae nobis ducid mos non nos nimeture et quo iliquia simillitis explabo. Nequatu sapellaci denimag nimenes maio. Nequae Imi, simento ratiis sequatur as is porem eatiaer oviduci pident pera atquis uteceri</p>
            <br />
            <p>denectum volluptatios dici ommo odit volorereicia por accusa volecus essinus andias aut ullati nobis ex earcillitati vende venda is moluptaepre sum, omnitatur acest, que eniate conempor auta ni offici as expla que voleniminust laboriandae volupta tumquia nos milluptam rem essi quia net aut dolliqui ne et rem reperib usanimodist, none prae sitae susant venimaximi, suscipsunt</p>
          </div>


        </Modal>
      </div>
    );
  }
}

export default MapPage;
