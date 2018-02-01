import React from 'react';
import HeroImage from '../components/HeroImage';
import LocationBox from '../components/LocationBox';
import LeadershipHero from '../assets/images/leadership-hero.jpg';
import LeadershipPortrait from '../assets/images/contact.jpg';

import { Row, Col } from 'antd';

class Leadership extends React.Component {
  render() {
    return (
      <div>
        <LocationBox
          mainHeader={'OUR EXECUTIVE'}
          subHeader={'Leadership'}
          start={'Home'}
          end={'Leadership'}
        />
        <HeroImage height={100} background={LeadershipHero} />

        <Row className="gutter-row" id="firm-overview" gutter={45} style={{paddingTop: 50, paddingBottom: 50}}>

          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }} style={{paddingBottom: 30}}>
            <img src={LeadershipPortrait} />
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <h3 className="portfolio-callout">Anthony Melillo</h3>
            <h3 className="section-header" style={{ marginTop: 10 }}>MANAGING PRINCIPAL</h3>
            <br />
            <p style={{ marginTop: 40 }}>Anthony M. Melillo is Managing Principal and Founder of Melillo Equities. Mr. Melillo has been involved in all phases of the firms development since its founding in 2012. Driven by his passion to rebuild not only urban city centers, but also the communities that live within, Mr. Melillo has positioned Melillo Equities as a conduit for capital to flow freely into small cap, transit-oriented submarkets.</p>
            <br />
            <p>Prior to, Anthony worked at ABM Industries, as the Director of Mergers & Acquisitions, to oversee the end-to-end purchase and integration of target companies. In addition, Anthony supported the Treasurer to create and manage all capital related initiatives, including a $50 million share repurchase program, $650 million credit facility syndication, and an internal financing arm (ABM Energy Capital).</p>
            <br />
            <p>Mr. Melillo is an active philanthropist with a history of supporting local communities, by way of churches, civil services, and other local non-profit organizations. In addition, Mr. Melillo has also identified New Jersey’s need to promote local preservation and has therefore co-founded the Somerset Land Preservation Trust in an effort to provide local offices with the tools necessary to combat sprawl and rampant development of New Jersey’s priceless watersheds and viewsheds.</p>
            <br />
            <p>Anthony graduated with a BS in Economics from the Wharton School at the University of Pennsylvania, with a dual concentration in Real Estate Finance and Business Management.</p>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Leadership;
