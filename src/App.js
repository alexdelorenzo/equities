import React from 'react';
import './assets/css/App.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PeaPackGladstoneMap from './containers/PeaPackGladstoneMap';
import Contact from './containers/Contact';
import Footer from './components/Footer';
import ScrollToTop from './containers/ScrollToTop';

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
            <div>
            <Navigation  newKey={this.state.newKey} />
                <Switch id="test">
                  <Route exact path="/" component={Home} />
                  <Route exact path="/contact" component={Contact} />
                  <Route exact path="/portfolio/peakpack-gladstone" component={PeaPackGladstoneMap} />
                </Switch>
            </div>
          </ScrollToTop>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
