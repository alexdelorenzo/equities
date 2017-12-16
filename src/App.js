import React from 'react';
import './assets/css/App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import PeaPackGladstoneMap from './containers/PeaPackGladstoneMap';

class App extends React.Component {

  render() {

    return (
      <BrowserRouter >
        <div>
         <Navigation/>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/maps/peakpack-gladstone" component={PeaPackGladstoneMap} />
              </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
