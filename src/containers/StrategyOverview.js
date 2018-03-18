import React from 'react';
import HeroImage from '../components/HeroImage';
import CommunityLogo from '../assets/images/firm-overview/community-logo.jpg';
import GreenEarth from '../assets/images/firm-overview/green-earth.png';
import Landscape from '../assets/images/csr-landscape.jpg';
import StrategyBackground from '../assets/images/strategy-background.jpg';
import UrbanPlanningBackground from '../assets/images/urban-planning.png';
import LocationBox from '../components/LocationBox';

import { Row, Col, Anchor, Collapse } from 'antd';
const Panel = Collapse.Panel;
const { Link } = Anchor;

class StrategyOverview extends React.Component {
  render() {
    return (
      <div>
        <LocationBox
          mainHeader={'OUR'}
          subHeader={'Strategy'}
          start={'Home'}
          end={'Strategy'}
        />
      <HeroImage
        height={100}
        background={StrategyBackground}
        bottomHeader={'STRATEGY'} />

        <Row className="gutter-row" id="strategy-overview" gutter={45} style={{paddingTop: 30}}>

          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }} style={{paddingBottom: 30}}>
            <span>MELILLO EQUITIES</span> pursues investment opportunities necessitating the development, repositioning and/or recapitalization of properties within supply-constrained submarkets.
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <p>Within these markets, we target a wide variety of asset classes across the full risk-return spectrum. Once invested, we achieve long term profitability through unwavering dedication to our investment thesis, which integrates leading Urban Planning principles with our comprehensive land-use plans.</p>
          </Col>
          <Col md={{ span: 4}} style={{zIndex: 9999}} className="anchor-menu">
            <Anchor
              affix={true}
              offsetTop={223}
              showInkInFixed={true}
            >
              <Link href="#strategy-overview" title="STRATEGY OVERVIEW" />
              <Link href="#acquisition-criteria" title="ACQUISITION CRITERIA" />
              <Link href="#competitive-edge" title="COMPETITIVE EDGE" />
            </Anchor>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 16, offset: 4}}>
            We have identified two market arbitrage opportunities as our value-add propositions.
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col xs={24} md={{ span: 8, offset: 4 }}>
            <Col span={6}>
              <span className="large-number">
                1
              </span>
            </Col>
            <Col className="paragraph" span={18}>
              <p>The existence of pricing disparities between select markets with comparable underlying characteristics.</p>
              <Collapse style={{ paddingTop: 20 }} bordered={false}>
                <Panel header="read more">
                  <p>Within the last decade, revitalization efforts spearheaded by real estate firms have been quite impactful; cities once constrained by inadequate parking, dated infrastructure and limited amenities are now being revitalized into thriving urban centers. This resurgence has led to increased enthusiasm for urban living, further solidifying attractive profit margins for participating firms. However, capital continues to be disproportionately allocated to larger urban centers, while smaller submarkets remain capital-stricken. This is largely due to firms’ inability to identify scalable investments, along with their reluctance to navigate the diverse sets of ordinances that govern each town.   The resulting disparity has meant that larger Metropolitan Statistical Areas (MSAs) have become oversaturated while overlooked submarkets with comparable underlying characteristics continue to provide ample investment opportunities.</p>
                </Panel>
              </Collapse>
            </Col>
          </Col>
          <Col xs={24} md={{ span: 8 }}>
            <Col span={6}>
              <span className="large-number">
                2
              </span>
            </Col>
            <Col className="paragraph" span={18}>
              <p>The existence of synergies upon achieving critical mass within supply-constrained submarkets.</p>
              <Collapse style={{ paddingTop: 20 }} bordered={false}>
                <Panel header="read more">
                  <p>At Melillo Equities, we define critical mass as the point at which a firm achieves sufficient market share to realize the benefits derived from economies of scale and economies of scope. Despite the significant competitive advantages that such a position confers, most firms encounter two key challenges that indelibly hinder their progress. First, binding term limits force divestiture upon a fund’s maturity, which ultimately precludes systematic AUM growth. Secondly, real estate firms frequently disregard the importance of geographical concentration, amassing disconnected portfolios that account for a relatively small percentage of the overall supply within any given market. We believe that any viable roadmap for achieving critical mass begins by flouting these two common but counterproductive practices and committing to long-term, open-ended investment structures within supply-constrained submarkets.</p>
                </Panel>
              </Collapse>
            </Col>
          </Col>
        </Row>

        <Row style={{ paddingTop: 120}} id="acquisition-criteria">
          <Col xs={24} md={{ span: 16, offset: 4}}>
            <h1 className="blue-main-header">
              ACQUISITION CRITERIA
            </h1>
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }}>
            <span>AT MELILLO EQUITIES</span> we actively seek opportunities meeting the following general investment criteria:
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <ul>
              <li>Geographic Focus: Somerset & Morris County</li>
              <li>Asset Classes: Commercial, Multifamily and other Emerging Asset classes</li>
              <li>Lease Form: NN, NNN, Modified Gross</li>
              <li>Tenant: Single or Multiple Tenants</li>
              <li>Transaction Size: Up to $7 million</li>
              <li>Investment Hold Period: Perpetuity</li>
              <li>Target Returns: Core to Opportunistic</li>
            </ul>
          </Col>
          <Col xs={24} md={{ span: 16, offset: 4 }} style={{ paddingTop: 30, paddingBottom: 10}}>
            <hr style={{ border: '0.5px solid #ddd' }} />
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }}>
            <span>WE ALSO LOOK BEYOND</span> the property line to the community itself, assessing fundamental strengths in the following areas:
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <ul>
              <li>Demographics Trends</li>
              <li>Workforce (occupational specialization</li>
              <li>Social Heterogeneity</li>
              <li>Transit Orientation</li>
              <li>Public Infrastructure</li>
            </ul>
          </Col>
          <Col xs={24} md={{ span: 16, offset: 4 }} style={{ paddingTop: 30, paddingBottom: 10}}>
            <hr style={{ border: '0.5px solid #ddd' }} />
          </Col>
        </Row>
        <Row className="gutter-row" gutter={45} style={{ paddingTop: 20 }}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 8, offset: 4 }}>
            <span>LASTLY,</span> we closely examine all factors we deem to inherently limit supply within a community, such as the following:
          </Col>
          <Col className="paragraph" xs={24} md={8}>
            <ul>
              <li>Historical Boards</li>
              <li>Restrictive Zoning Ordinances</li>
              <li>Geographical Constraints (waterways, slopes, etc)</li>
              <li>DEP jurisdiction</li>
            </ul>
          </Col>
          <Col xs={24} md={{ span: 16, offset: 4 }} style={{ paddingTop: 30, paddingBottom: 10}}>
            <hr style={{ border: '0.5px solid #ddd' }} />
          </Col>
        </Row>

        <Row style={{ paddingTop: 120}} id="competitive-edge">
          <Col xs={24} md={{ span: 12, offset: 6}}>
            <h1 className="blue-main-header">
              COMPETITIVE EDGE
            </h1>
          </Col>
        </Row>
        <Row style={{ paddingTop: 30}}>
          <Col className="paragraph-emphasis" xs={24} md={{ span: 12, offset: 6 }}>
            <span>AS A BOUTIQUE FIRM,</span> we remain unrelenting in our efforts to unlock value for our clients. However, our capacity to consistently outperform in an ever-changing marketplace is built upon our continuous application of the following fundamental principles.
          </Col>
        </Row>

      </div>
    );
  }
}

export default StrategyOverview;
