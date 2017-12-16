import React from 'react';
import {Row, Col} from 'antd';
import footerLogo from '../assets/images/footer-logo.svg';
 

class Footer extends React.Component {

  render() {

    return (
      <Row
        className="footer"
        style={{
        minHeight: 270 + 'px',
        background: 'white'
      }}>

        <Col
          className="footer-column"
          xs={{
          span: 5,
          offset: 1
        }}
          lg={{
          span: 3,
          offset: 2,
          order: 'bottom-aligned'
        }}>
          <div className='vert-align'>
            <h5 className="footer-header">LOCATION</h5>
            <br/>
            <p>190 Main Street</p>
            <p>Ste. 202</p>
            <p>Gladstone, NJ 07934</p>
          </div>
        </Col>
        <Col
          className="footer-column"
          xs={{
          span: 5,
          offset: 1
        }}
          lg={{
          span: 3,
          offset: 2,
          order: 'bottom-aligned'
        }}>
          <div className='vert-align'>
            <h5 className="footer-header">CONTACT</h5>
            <br/>
            <p>1 + 908 234 9561</p>
            <p>
              info@MelilloEquities.com</p>
          </div>
        </Col>
        <Col
          className="footer-column"
          xs={{
          span: 5,
          offset: 1
        }}
          lg={{
          span: 5,
          offset: 8,
          order: 'bottom-aligned'
        }}>
          <div className='vert-align'>
            <img src={footerLogo} width={200 + 'px'} style={{marginBottom: 20 +'px'}} alt={"Meillo Equities Logo"}/>
            <h5 className="footer-links"><a>CONTACT</a> 	&nbsp;	&nbsp;  <a>PRIVACY POLICY</a></h5>
            <br />
            <h5 className="footer-infp">
              © MELILLO EQUITIES</h5>
            <h5 className="footer-info">
              SITE CRAFTED BY KINGWILLY</h5>

          </div>
        </Col>

      </Row>

    );
  }
}

export default Footer;
