import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import TextMain from './textMode/TextMain';
import ImageMain from './imageMode/ImageMain';
import CreateGame from './textMode/CreateTextGame';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Switch>
            <Route path="/textmode/create" component={CreateGame} />
            <Route path="/textmode" component={TextMain} />
            <Route path="/imagemode" component={ImageMain} />
            <Route path="/" component={LandingPage} />

          </Switch>

        </div>
      </Router>

    );
  }
}

export default App;
