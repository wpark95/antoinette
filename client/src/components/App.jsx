import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import ImageMain from './imageMode/ImageMain';
import TextMain from './textMode/TextMain';
import CreateTextGame from './textMode/CreateTextGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Switch>
        <Route exact path="/textmode/create" component={CreateTextGame} />
        <Route path="/imagemode" component={ImageMain} />
        <Route path="/textmode" component={TextMain} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
