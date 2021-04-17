import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import TextMain from './textMode/TextMain';
import ImageMain from './imageMode/ImageMain';
import CreateTextGame from './textMode/main/CreateTextGame';
import PostView from './textMode/post/PostView';
import ErrorPage from './ErrorPage';

const app = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/textmode/view/:id" component={PostView} />
        <Route path="/textmode/create" component={CreateTextGame} />
        <Route path="/textmode/" component={TextMain} />
        <Route path="/imagemode/" component={ImageMain} />
        <Route path="/" component={LandingPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  </Router>
);

export default app;
