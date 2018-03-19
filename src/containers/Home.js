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
              fadeOnScroll={true}
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
                fadeOnScroll={true}
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
                fadeOnScroll={true}
                url={'/leadership'}
              />
            </Col>
          </Row>
      </div>
    );
  }
}

var animateHTML = function () {
  var elems,
    windowHeight
  var init = function () {
    elems = document.getElementsByClassName('hero-background')
    windowHeight = window.innerHeight
    _addEventHandlers()
  }
  var _addEventHandlers = function () {
    window.addEventListener('scroll', _checkPosition)
    window.addEventListener('resize', init)
  }
  var _checkPosition = function () {
    for (var i = 0; i < elems.length; i++) {
      var posFromTop = elems[i].getBoundingClientRect().top
      if (posFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace('hero-background', 'hero-background-color')
      }
    }
  }
  return {
    init: init
  }
}
animateHTML().init()

export default Home;
