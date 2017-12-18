import React from 'react';
import HeroImage from '../components/HeroImage';
import CommunityLogo from '../assets/images/firm-overview/community-logo.jpg';
import GreenEarth from '../assets/images/firm-overview/green-earth.png';
import Leaves from '../assets/images/firm-overview/leaves.png';
import OverviewBackground from '../assets/images/firm-overview/firm-overview-hero.jpg';
import UrbanPlanningBackground from '../assets/images/firm-overview/Urban-Planning-Image.png';
import LocationBox from '../components/LocationBox';

import { Row, Col } from 'antd';


class FirmOverview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LocationBox
          mainHeader={'OUR'}
          subHeader={'Firm'}
          start={'Home'}
          middle={'About'}
          end={'Our Firm'}
        />
        <HeroImage height={100} background={OverviewBackground}/>
        <Row className="gutter-row" gutter={45} style={{paddingTop: 30}}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }} style={{paddingBottom: 30}}>
            <span>MELILLO EQUITIES</span> is a vertically integrated real estate private equity firm with geographical concentration in some of New Jersey’s most desirable transit-oriented submarkets. With access to a variety of discretionary open-end and closed-end commingled funds, our clients are provided scalable investment opportunities within small cap markets.
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <p>We invest in all major real estate types, namely office, retail, residential and industrial properties as well as emerging asset classes such as affordable housing and self-storage. In addition, we target assets along the full range of the risk-return spectrum, from core to opportunistic.</p>
            <br />
            <p>In our continuing efforts to exceed market expectations, we strive to rethink the way in which land is used and consumed. Our investment strategy incorporates leading Urban Planning principles, which not only set us apart from our competition, but also reinforces our dedication to redefining the way in which residents cohabitate within their respective communities.</p>
            <br />
            <p>Here at Melillo Equities, we also stress the importance of corporate social responsibility (CSR) as a core principle when making each strategic decision. With the help of local officials, certified 501(c)(3) land preservation trusts and community groups alike, we ensure that all stakeholders are considered.</p>
          </Col>
        </Row>
        <Row style={{ paddingTop: 120}}>
          <Col xs={24} md={{ span: 16, offset: 4}}>
            <h1 className="blue-main-header" style={{marginBottom: -5}}>
                OUR VISION
            </h1>
            <img src={UrbanPlanningBackground} />
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{paddingTop: 20}}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4}}>
            <span>RAPID URBANIZATION</span> is bringing about many challenges in the spatial distribution of people and resources, as well as in the use and consumption of land.
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{paddingTop: 30}}>
          <Col className="paragraph" xs={24} md={{ span: 8, offset: 4 }}>
            <p>With strict zoning policies dividing land into residential, commercial and industrial areas, we find horizontally sprawled cities struggling to cope with the negative externalities they indirectly cause, such as congestion, infrastructure issues, pollution and social disaggregation.</p>
            <br />
            <p>Here at Melillo Equities, we envision New Jersey’s urban centers as places that facilitate social, economic and environmental progress. We also see infrastructure, public space and aesthetic appeal as critical components in a cities ability to encourage quality of life, social development and the general well being of its residents.</p>
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <p>All can be achieved through effective urban planning strategies and collaboration/coordination with local officials at all levels of government. Melillo Equities encourages a holistic, all-inclusive approach to urban development that not only addresses current supply shortages for housing opportunities and local amenities, but also the integration of pedestrian friendly streetscapes and public infrastructure to promote social connectivity and diversity, thus making neighborhoods more cohesive, lively, and ultimately more attractive to both residents and investors alike.</p>
          </Col>
        </Row>
        <Row style={{ paddingTop: 120}}>
          <Col xs={24} md={{ span: 16, offset: 4}}>
            <h1 className="blue-main-header">
              CSR
            </h1>
            <h2 className="blue-sub-header" style={{marginTop: 10}}>
              Corporate Social Responsibility
            </h2>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={30} style={{ paddingTop: 50}}>
          <Col xs={{ span: 6 }} md={{ span: 4, offset: 4}}>
            <img src={CommunityLogo} />
          </Col>
          <Col className="paragraph" xs={24} md={12} style={{paddingTop: 25}}>
            <h3 className="section-header">COMMUNITY INVOLVEMENT</h3>
            <br />
            <p>We seek to transform lives by bolstering the long-term vitality of local communities. Collaboration with local officials and urban planners allow for the creation of a master plan that balances local amenities and civic services with a variety of housing opportunities.</p>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={40} style={{ paddingTop: 50}}>
          <Col xs={{ span: 6}} md={{ span: 9, offset: 4}}>
            <img src={GreenEarth} />
          </Col>
          <Col className="paragraph firmoverview-environment" xs={24} md={7}>
            <h3 className="section-header">ENVIRONMENTAL ACTION</h3>
            <br />
            <p>Our dedication to land preservation is unparalleled among industry competitors. We see it as our responsibility to more efficiently utilize developed lands as a means for accommodating population growth. Our partnership with certified 501(c)(3) land preservation trusts and local officials help ensure that New Jersey’s viewsheds and natural resources are preserved and protected for future generations to enjoy.</p>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={40} style={{ paddingTop: 80}}>
          <Col className="paragraph" xs={24} md={{ span: 12, offset: 6}}>
            <h3 className="section-header">SUSTAINABLE GROWTH</h3>
            <br />
            <p>It is projected that two-thirds of the worlds population will be living in urban areas by 2050. Concentrated population growth of this magnitude will most certainly present numerous challenges, namely pollution, infrastructure and socioeconomic inequality. While advancements in technology and policy/regulation reform are exogenous to our efforts, we believe our attention should be focused on sustainability as it pertains to urban planning.</p>
          </Col>
        </Row>
        <Row>
          <Col className="firmoverview-leaves" xs={24}>
            <img className="img-hor" src={Leaves} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default FirmOverview;
