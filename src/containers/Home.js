import React from 'react';
import PortfolioSection from '../components/PortfolioSection';
import HomeHeroImage from '../components/HomeHeroImage';
import HeroImage from '../components/HeroImage';
import VistionBackground from '../assets/images/vision.png'
import LeadershipBackground from '../assets/images/leadership.png'
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
          <HeroImage
            smallCall={'STRAYEGY OVERVIEW'}
            largeCall={'Our Strategy'}
            height={40}
            background={StrategyBackground}
          />
          <OurSplitSection />
      </div>
    );
  }
}

export default Home;
