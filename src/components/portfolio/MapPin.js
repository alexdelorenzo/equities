import React from 'react';
import {Tooltip, Modal, Row, Col} from 'antd';
import MapPinLocation from '../../assets/images/map-pin.png'


class MapPin extends React.Component {
constructor(props) {
    super(props);
        this.state = {
            modalVisible: false
        };
    }
    handleOk = (e) => {
        this.setState({modalVisible: false});
    }
    handleCancel = (e) => {
        this.setState({modalVisible: false});
    }
    showMapModal(record) {
        if (this.state.visible) {
            this.setState({modalVisible: false});
        } else {
            this.setState({modalVisible: true});
        }
    }
  render() {

    return (
        <div>
        <Tooltip 
            title={this.props.address}
            placement="right"
        >
        <div
            onClick={() => this.showMapModal()}
            style={{
                position: 'absolute',
                top: this.props.top + '%',
                left: this.props.left + '%',
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
                width: 83 + '%',
                marginRight: 20 + 'px',
                textAlign: 'center'
            
            }}>
                {this.props.number}
            </p>
        </div>
     </Tooltip>
     <Modal
            closable={true}
            style={{ 
                top: 50,
                width: 95 + '%',

            }}
            visible={this.state.modalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={false}
            maskClosable={true}
        >
            <br />
            <img src={this.props.heroImageLocation} className={'modal-photo'} alt="Modal"/>
            <br />
            <h1 style={{
                color: '#1d4a63',
                textAlign: 'center',
                fontSize: 26 + 'px'
            }}>
                {this.props.formalAddress}
            </h1>
            <h2 style={{
                color: 'gray',
                textAlign: 'center',
                fontSize: 17 + 'px'
            }}>
                <i>{this.props.city}</i>
            </h2>

            <div
                style={{
                    padding: 122 + 'px',
                    paddingBottom: 30 + 'px',
                    paddingTop: 20 + 'px',
                }}
            >
            <Row>
                <Col xs={19}>
                    <p style={{
                        color: 'gray',
                        textAlign: 'justify',
                        fontSize: 16 + 'px',
                        lineHeight: 1.2
                    }}>
                        {this.props.description}
                    </p>
                </Col>
                <Col xs={1}/>
                <Col xs={4}>
                    <b className="modal-data-title">CLIENT</b>
                    <p style={{
                        color: 'gray',
                        textAlign: 'left',
                        fontSize: 14 + 'px',
                        lineHeight: .8
                    }}>
                        <i>{this.props.client}</i>
                    </p>
                    <br />
                    <b className="modal-data-title">ARCHITECT</b>
                    <p style={{
                        color: 'gray',
                        textAlign: 'left',
                        fontSize: 14 + 'px',
                        lineHeight: .8
                    }}>
                        <i>{this.props.architect}</i>
                    </p>
                    <br />
                    <b className="modal-data-title">LOCATION</b>
                    <p style={{
                        color: 'gray',
                        textAlign: 'left',
                        fontSize: 14 + 'px',
                        lineHeight: .8
                    }}>
                        <i>{this.props.location}</i>
                    </p>
                    <br />
                </Col>
            </Row>
            </div>
            <br />
            
        </Modal>
     </div>

    );
  }
}

export default MapPin;
