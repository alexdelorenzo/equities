import React from 'react';
import './assets/css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/Home';
import PeaPackGladstoneMap from './containers/PeaPackGladstoneMap';
import Contact from './containers/Contact';
import FirmOverview from './containers/FirmOverview';
import Footer from './components/Footer';
import ScrollToTop from './containers/ScrollToTop';
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./containers/AnimatedSwitch";
import {BackTop} from 'antd';

class App extends React.Component {
  state = {
    newKey: new Date()

  };

  render() {
    document.getElementById("body").onclick = function(e) {
      this.setState({newKey: new Date()})

    }.bind(this)

    return (
      <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
      <div>
        <ScrollToTop>
        <BackTop />
            <div>
            <Navigation  newKey={this.state.newKey} />
            <Route
					render={({ location }) => (
            <TransitionGroup component="main">
            <AnimatedSwitch
              key={location.key}
              location={location}
            >
              <Route exact path="/" component={Home} />

              <Route
                path="/contact"
                render={props => (
                  <Contact {...props}  />
                )}
              />
              <Route
                path="/portfolio/peakpack-gladstone"
                render={props => (
                  <PeaPackGladstoneMap {...props}  />
                )}
              />
              <Route
                path="/firm/firm-overview"
                render={props => (
                  <FirmOverview {...props}  />
                )}
              />

            </AnimatedSwitch>
          </TransitionGroup>
        )}
				/>
            </div>
          </ScrollToTop>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
