import React from 'react';
import {Row, Col, Icon} from 'antd';
import PeapackGladstoneMap from '../assets/images/maps/peapack-gladstone.svg'
import FarHillsMap from '../assets/images/maps/far-hills.svg'
import BernardsvilleMap from '../assets/images/maps/bernardsville.svg'
import MendhamMap from '../assets/images/maps/mendham-01.svg'
 

class PortfolioSection extends React.Component {

  render() {

    return (
      <div>
        <div
          style={{
          height: 20 + 'vh',
          paddingTop: 10 + 'vh',
          backgroundColor: 'white'
        }}>
          <h4 className="prop-list-title">MELILLO EQUITIES PORTFOLIO</h4>
        </div>
        <Row>
          <Col
            className='portfolio-block portfolio-map'
            style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${PeapackGladstoneMap})`
          }}
            xs={24}
            md={12}></Col>
          <Col className="portfolio-block portfolio-text-block" xs={24} md={12}>
            <div className="portfolio-block-outer">
              <div className="portfolio-block-inner-right">
                <h3 className="portfolio-callout right">Peapack-Gladstone</h3>
              </div>
              <div className="portfolio-line margin-auto-left right" style={{width: 370 + 'px'}}>
                <h4 className="portfolio-learn left">
                  <a style={{
                    color: '#72736e'
                  }}>GO TO PEAPACK-GLADSTONE
                    <Icon
                      style={{
                      color: '#72736e'
                    }}
                      type="arrow-right"/></a>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="portfolio-block portfolio-text-block" xs={24} md={12}>
            <div className="portfolio-block-outer">
              <div className="portfolio-block-inner-left">
                <h3 className="portfolio-callout left">Far Hills</h3>
              </div>
              <div className="portfolio-line margin-auto-right left" style={{width: 270 + 'px'}}> 
                <h4 className="portfolio-learn right">
                  <a style={{
                    color: '#72736e'
                  }}>GO TO FAR HILLS
                    <Icon
                      style={{
                      color: '#72736e'
                    }}
                      type="arrow-right"/></a>
                </h4>
              </div>
            </div>
          </Col>
          <Col
            className='portfolio-block portfolio-map'
            style={{
            backgroundColor: 'white',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundImage: `url(${FarHillsMap})`
          }}
            xs={24}
            md={12}></Col>

        </Row>
        <Row>
        <Col
          className='portfolio-block portfolio-map'
          style={{
             backgroundColor: 'white',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url(${BernardsvilleMap})`
        }}
          xs={24}
          md={12}></Col>
        <Col className="portfolio-block portfolio-text-block" xs={24} md={12}>
          <div className="portfolio-block-outer">
            <div className="portfolio-block-inner-right">
              <h3 className="portfolio-callout right">Bernardsville</h3>
            </div>
            <div className="portfolio-line margin-auto-left right" style={{width: 320 + 'px'}}>
              <h4 className="portfolio-learn left">
                <a style={{
                  color: '#72736e'
                }}>GO TO BERNARDSVILLE
                  <Icon
                    style={{
                    color: '#72736e'
                  }}
                    type="arrow-right"/></a>
              </h4>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
      <Col className="portfolio-block portfolio-text-block" xs={24} md={12}>
        <div className="portfolio-block-outer">
          <div className="portfolio-block-inner-left">
            <h3 className="portfolio-callout left">Mendham</h3>
          </div>
          <div className="portfolio-line margin-auto-right left" style={{width: 270 + 'px'}}>
            <h4 className="portfolio-learn right">
              <a style={{
                color: '#72736e'
              }}>GO TO MENDHAM
                <Icon
                  style={{
                  color: '#72736e'
                }}
                  type="arrow-right"/></a>
            </h4>
          </div>
        </div>
      </Col>
      <Col
        className='portfolio-block portfolio-map'
        style={{
        backgroundColor: 'white',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: `url(${MendhamMap})`
      }}
        xs={24}
        md={12}></Col>

    </Row>
      </div>
    );
  }
}

export default PortfolioSection;
