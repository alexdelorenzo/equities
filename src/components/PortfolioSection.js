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
            <div className="portfolio-block-outer center">
                <h3 className="portfolio-callout">Peapack-Gladstone</h3>
                <h4 className="portfolio-learn">
                  <a style={{
                    color: '#72736e'
                  }}>
                    <Icon
                      style={{
                      color: '#72736e'
                    }}
                      type="arrow-left"/></a>
                </h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="portfolio-block portfolio-text-block" xs={24} md={12}>
            <div className="portfolio-block-outer center">
                <h3 className="portfolio-callout">Far Hills</h3>
                <h4 className="portfolio-learn">
                  <a style={{
                    color: '#72736e'
                  }}>
                    <Icon
                      style={{
                      color: '#72736e'
                    }}
                      type="arrow-right"/></a>
                </h4>
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
          <div className="portfolio-block-outer center">
              <h3 className="portfolio-callout">Bernardsville</h3>
              <h4 className="portfolio-learn">
                <a style={{
                  color: '#72736e'
                }}>
                  <Icon
                    style={{
                    color: '#72736e'
                  }}
                    type="arrow-left"/></a>
              </h4>
          </div>
        </Col>
      </Row>
      <Row>
      <Col className="portfolio-block portfolio-text-block" xs={24} md={12}>
        <div className="portfolio-block-outer center">
            <h3 className="portfolio-callout">Mendham</h3>
            <h4 className="portfolio-learn">
              <a style={{
                color: '#72736e'
              }}>
                <Icon
                  style={{
                  color: '#72736e'
                }}
                  type="arrow-right"/></a>
            </h4>
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
