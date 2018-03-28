import React from 'react';
import { Row, Col } from 'antd';
import { Element } from 'react-scroll';

import PortfolioSection from '../components/PortfolioSection';
import HomeHeroImage from '../components/HomeHeroImage';
import HeroImage from '../components/HeroImage';
import FirmIntro from '../assets/images/vermont.jpg';
import LeadershipIntro from '../assets/images/lion.jpg'
import StrategyBackground from '../assets/images/strategy.png'


class Home extends React.Component {

  render() {

    return (
      <div>
          <HomeHeroImage/>
          <Element name="portfolio">
            <PortfolioSection />
          </Element>
          <Row style={{ textAlign: 'center' }}>
            <HeroImage
              smallCall={'OUR'}
              largeCall={'Strategy'}
              height={45}
              background={StrategyBackground}
              arrowDirection={'right'}
              textPosition={'center'}
              url={'/strategy/strategy-overview'}
            />
          </Row>
          <Row>
            <Col
              style={{ textAlign: 'left' }}
              xs={24}
              md={12}>
              <HeroImage
                smallCall={'OUR'}
                largeCall={'Firm'}
                height={65}
                background={FirmIntro}
                arrowDirection={'left'}
                width={'two-column'}
                fadeOnHover={true}
                url={'/firm/firm-overview'}
              />
            </Col>
            <Col
              style={{ textAlign: 'right' }}
              xs={24}
              md={12}>
              <HeroImage
                smallCall={'OUR EXECUTIVE'}
                largeCall={'Leadership'}
                height={65}
                background={LeadershipIntro}
                arrowDirection={'right'}
                textPosition={'right'}
                width={'two-column'}
                fadeOnHover={true}
                url={'/leadership'}
              />
            </Col>
          </Row>
      </div>
    );
  }
}

export default Home;
