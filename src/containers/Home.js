import React from 'react';
import { Row, Col } from 'antd';
import PortfolioSection from '../components/PortfolioSection';
import HomeHeroImage from '../components/HomeHeroImage';
import HeroImage from '../components/HeroImage';
import VistionBackground from '../assets/images/vision.png'
import LeadershipBackground from '../assets/images/leadership-hero.jpg'
import StrategyBackground from '../assets/images/strategy.png'
import CallOut from '../components/CallOut';
import DoubleCallOut from '../components/DoubleCallOut';
import AdditionCallOut from '../components/AdditionCallout';
import OurSplitSection from '../components/OurSplitSection';


class Home extends React.Component {

  render() {

    return (
      <div>
          <HomeHeroImage/>
          <PortfolioSection />
          <Row style={{ textAlign: 'center' }}>
            <HeroImage
              smallCall={'STRATEGY OVERVIEW'}
              largeCall={'Our Strategy'}
              height={45}
              background={StrategyBackground}
              arrowDirection={'right'}
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
                height={50}
                background={LeadershipBackground}
                arrowDirection={'left'}
              />
          </Col>
          <Col
            style={{ textAlign: 'right' }}
            xs={24}
            md={12}>
            <HeroImage
              smallCall={'OUR EXECUTIVE'}
              largeCall={'Leadership'}
              height={50}
              background={LeadershipBackground}
              arrowDirection={'right'}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
