import React, {Component} from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
import References from './References';
import SocialLinks from './SocialLinks';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <Header />
          <main>
            <Route exact path="/" component={About}/>
            <Route path="/projects" component={Projects}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/references" component={References}/>
            <SocialLinks />
          </main>
          <Footer />
      </HashRouter>
    ); 
  }
}

export default App;