import React from 'react';
import PortfolioSection from '../components/PortfolioSection';
import HomeHeroImage from '../components/HomeHeroImage';
import HeroImage from '../components/HeroImage';
import VistionBackground from '../assets/images/vision.png'
import LeadershipBackground from '../assets/images/leadership.png'
import StrategyBackground from '../assets/images/strategy.png'
import CallOut from '../components/CallOut';
import DoubleCallOut from '../components/DoubleCallOut';
import AdditionCallOut from '../components/AdditionCallout'

class Home extends React.Component {

  render() {

    return (
      <div>
          <HomeHeroImage/>
          <PortfolioSection />        
          <HeroImage height={80} background={VistionBackground}/>
          <CallOut />
          <HeroImage
            smallCall={'OUR EXECUTIVE'}
            largeCall={'Leadership'}
            linkText={'LEARN ABOUT OUR LEADERSHIP'}
            height={60}
            background={LeadershipBackground}
          />
          <AdditionCallOut />
          <HeroImage
            smallCall={'STRAYEGY OVERVIEW'}
            largeCall={'Our Strategy'}
            linkText={'LEARN ABOUT OUR STRATEGY'}
            height={40}
            background={StrategyBackground}
          />
          <DoubleCallOut />
      </div>
    );
  }
}

export default Home;
