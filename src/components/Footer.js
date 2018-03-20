import React from 'react';
import {Row, Col} from 'antd';
import MellioEquitiesLargeLogo from '../assets/images/footer-logo.svg'
import { Link } from 'react-router-dom'

class CallOut extends React.Component {

  render() {

    return (
      <div>
        <br />
        <br />
        <Row>
          <Col className="portfolio-block portfolio-text-block" style={{height: 160 + 'px', borderWidth: 0 + 'px'}} xs={24} md={8}>
            <div className="portfolio-block-outer" style={{height: 30 + '%'}}>
              <div style={{marginLeft: 150 + 'px'}}>
                <h5 className="portfolio-callout-small left">INVESTOR</h5>
                <Link to={'/investor-login'}>
                  <h3 className="portfolio-callout left">Login</h3>
                </Link>
              </div>
            </div>
          </Col>
          <Col className="portfolio-block portfolio-text-block" style={{height: 160 + 'px', borderWidth: 0 + 'px'}} xs={24} md={8}>
            <div className="portfolio-block-outer" style={{height: 30 + '%'}}>
                <Link to="/" >
                  <img src={MellioEquitiesLargeLogo} className="footer-logo" alt="Mellio Equities Footer Logo"/>
                </Link>
                <p className="footer-text">190 MAIN STREET, STE. 202, GLADSTONE, NJ 07934 1+9082349561</p>
            </div>
          </Col>
          <Col className="portfolio-block portfolio-text-block" style={{height: 160 + 'px', borderWidth: 0 + 'px'}} xs={24} md={8}>
            <div className="portfolio-block-outer" style={{height: 30 + '%'}}>
              <div style={{marginRight: 150 + 'px'}}>
                <h5 className="portfolio-callout-small right">SAY HI</h5>
                <Link to={'/contact'}>
                  <h3 className="portfolio-callout right">Contact</h3>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
        <br />
      </div>

    );
  }
}

export default CallOut;
