import React from 'react';
import {Row, Col, Icon} from 'antd';
import PeapackGladstoneMap from '../assets/images/maps/Gladstone-intro.jpg'
import FarHillsMap from '../assets/images/maps/Farhills-intro.jpg'
import BernardsvilleMap from '../assets/images/maps/Bernardsville-intro.jpg'
import MendhamMap from '../assets/images/maps/mendham-intro.jpg'


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
                    <div className="home-hero-arrow home-hero-arrow-center arrow-left">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 36 18" style={{ enableBackground:'new 0 0 36 18' }} >
                         <path d="M27.1,0.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l7.8,7.7H0.5C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.5,0.5h33.6
                        l-7.8,7.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.3,0,0.3-0.1L36,9L27.1,0.1z"/>
                      </svg>
                    </div>
                </a>

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
                    <div className="home-hero-arrow home-hero-arrow-center">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         viewBox="0 0 36 18" style={{ enableBackground:'new 0 0 36 18' }} >
                         <path d="M27.1,0.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l7.8,7.7H0.5C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.5,0.5h33.6
                        l-7.8,7.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.3,0,0.3-0.1L36,9L27.1,0.1z"/>
                      </svg>
                    </div>
                  </a>
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
                  <div className="home-hero-arrow home-hero-arrow-center arrow-left">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                       viewBox="0 0 36 18" style={{ enableBackground:'new 0 0 36 18' }} >
                       <path d="M27.1,0.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l7.8,7.7H0.5C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.5,0.5h33.6
                      l-7.8,7.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.3,0,0.3-0.1L36,9L27.1,0.1z"/>
                    </svg>
                  </div>
                </a>
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
                <div className="home-hero-arrow home-hero-arrow-center">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                     viewBox="0 0 36 18" style={{ enableBackground:'new 0 0 36 18' }} >
                     <path d="M27.1,0.1c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7l7.8,7.7H0.5C0.2,8.5,0,8.7,0,9c0,0.3,0.2,0.5,0.5,0.5h33.6
                    l-7.8,7.7c-0.2,0.2-0.2,0.5,0,0.7c0.1,0.1,0.2,0.1,0.3,0.1s0.3,0,0.3-0.1L36,9L27.1,0.1z"/>
                  </svg>
                </div>
              </a>
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
