import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import TextMain from './textMode/TextMain';
import ImageMain from './imageMode/ImageMain';
import CreateTextGame from './textMode/CreateTextGame';

const app = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/textmode/create" component={CreateTextGame} />
        <Route path="/textmode" component={TextMain} />
        <Route path="/imagemode" component={ImageMain} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </div>
  </Router>
);

export default app;
