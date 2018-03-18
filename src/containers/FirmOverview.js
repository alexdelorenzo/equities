import React from 'react';
import HeroImage from '../components/HeroImage';
import CommunityLogo from '../assets/images/firm-overview/community-logo.jpg';
import GreenEarth from '../assets/images/firm-overview/green-earth.png';
import Landscape from '../assets/images/csr-landscape.jpg';
import OverviewBackground from '../assets/images/vermont.jpg';
import UrbanPlanningBackground from '../assets/images/urban-planning.png';
import LocationBox from '../components/LocationBox';

import { Row, Col, Anchor } from 'antd';
const { Link } = Anchor;

class FirmOverview extends React.Component {
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
      <HeroImage
        height={100}
        background={OverviewBackground}
        bottomHeader={'FIRM OVERVIEW'} />

        <Row className="gutter-row" id="firm-overview" gutter={45} style={{paddingTop: 30}}>

          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }} style={{paddingBottom: 30}}>
            <span>MELILLO EQUITIES</span> is a vertically integrated real estate private equity firm with geographical concentration in some of New Jersey’s most historically vibrant transit-oriented submarkets.
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <p>With access to a variety of discretionary open-end and closed-end funds, we provide our clients scalable investment opportunities within small cap markets.</p>
            <br />
            <p>Melillo Equities invests in all major real estate classifications, including office, retail, residential and industrial properties, as well as emerging asset classes such as affordable housing and self-storage. In doing so, we target assets along the full range of the risk-return spectrum, from core to opportunistic.</p>
          </Col>
          <Col md={{ span: 4}} style={{zIndex: 9999}} className="anchor-menu">
            <Anchor
              affix={true}
              offsetTop={223}
              showInkInFixed={true}
            >
              <Link href="#firm-overview" title="FIRM OVERVIEW" />
              <Link href="#our-vision" title="OUR VISION" />
              <Link href="#corporate-responsibility" title="CORPORATE RESPONSIBILITY" />
            </Anchor>
          </Col>
        </Row>
        <Row style={{ paddingTop: 120}} id="our-vision">
          <Col xs={24} md={{ span: 16, offset: 4}}>
            <h1 className="blue-main-header" style={{marginBottom: -5}}>
                OUR VISION
            </h1>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{paddingTop: 20}}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4}}>
            <span>RAPID URBANIZATION</span> is bringing about many challenges in the spatial distribution of people and resources, as well as in the use and consumption of land.
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{paddingTop: 30}}>
          <Col className="paragraph" xs={24} md={12}>
            <img src={UrbanPlanningBackground} alt="Urban Planning Background" />
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <p>With traditional zoning policies encouraging the development of single use properties, we find horizontally sprawling cities struggling to cope with the infrastructure deficiencies, congestion, and social disaggregation that result.</p>
            <br />
            <p>At Melillo Equities, we strive to achieve our vision of “Communities Redefined” by embracing a comprehensive approach to confronting these challenges, focusing on:</p>
            <br />
            <ul className="bullet-list">
              <li>Implementation of effective urban planning strategies;</li>
              <li>Collaboration with local officials at all levels of government;</li>
              <li>Integration of public infrastructure, open space and pedestrian friendly streetscapes;</li>
              <li>Promotion of social connectivity and diversity.</li>
            </ul>
            <br />
            <p>In pursuing this holistic strategy, we also recognize that dynamic innovation is most beneficial when coupled with deliberate conservation. To that end, we regard New Jersey’s urban centers as important chroniclers of our shared history in addition to being powerful facilitators of social, economic and environmental progress.</p>
          </Col>
        </Row>
        <Row style={{ paddingTop: 120}} id="corporate-responsibility">
          <Col xs={24} md={{ span: 16, offset: 4}}>
            <h1 className="blue-main-header">
              CSR
            </h1>
            <h2 className="blue-sub-header" style={{marginTop: 10}}>
              CORPORATE SOCIAL RESPONSIBILITY
            </h2>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={40}>
          <Col className="paragraph paragraph-padding" xs={24} md={{ span: 12, offset: 6 }}>
            <h3 className="section-header-blue">ARCHITECTURAL CONSERVATION</h3>
            <p>We seek to protect the rich heritage of historically sensitive localities through the preservation of architecturally significant buildings that reflect elements of social, economic and political history. Such preservation efforts provide aesthetic benefits, while also bolstering community pride.</p>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={40}>
          <Col className="paragraph paragraph-padding" xs={24} md={{ span: 12, offset: 6 }}>
            <h3 className="section-header-blue">ENVIRONMENTAL ACTION</h3>
            <p>Our dedication to land preservation is unparalleled among industry competitors. We see it as our responsibility to more efficiently utilize developed lands as a means for accommodating population growth. Our collaboration with certified 501(c)(3) land preservation trusts and local officials help protect and preserve New Jersey’s viewsheds and natural resources for future generations to enjoy.</p>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={40}>
          <Col className="paragraph paragraph-padding" xs={24} md={{ span: 12, offset: 6}}>
            <h3 className="section-header-blue">SUSTAINABLE GROWTH</h3>
            <p>It is projected that two-thirds of the world’s population will be living in urban areas by 2050. Concentrated population growth of this magnitude will most certainly present numerous challenges, including pollution, strains on existing infrastructure, and socioeconomic inequality. We believe urban planning will be crucial to ameliorating these consequences, and combined  with regulation reform and advancements in technology can offer the opportunity
for long term sustainability.</p>
          </Col>
        </Row>
        <Row style={{ top: -300, zIndex: -1 }}>
          <HeroImage
            height={150}
            background={Landscape}
            fadeOnScroll={true} />
        </Row>
      </div>
    );
  }
}

export default FirmOverview;
