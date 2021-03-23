import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import axios from 'axios';
import axios from 'axios';
import Header from '../Header';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textOne: '',
      textTwo: '',
    };
    this.sendInputDataOnSubmit = this.sendInputDataOnSubmit.bind(this);
    this.textOneKeyPressHandler = this.textOneKeyPressHandler.bind(this);
    this.textTwoKeyPressHandler = this.textTwoKeyPressHandler.bind(this);
  }

  textOneKeyPressHandler(e) {
    this.setState({ textOne: e.target.value });
  }

  textTwoKeyPressHandler(e) {
    this.setState({ textTwo: e.target.value });
  }

  sendInputDataOnSubmit() {
    const { textOne, textTwo } = this.state;
    axios.post('/test/textinput', {
      textOne,
      textTwo,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.clearInputBox();
  }

  clearInputBox() {
    this.setState({
      textOne: '',
      textTwo: '',
    });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Create Text Game</h1>
        <input type="textOne" onChange={this.textOneKeyPressHandler} />
        <br />
        <input type="textTwo" onChange={this.textTwoKeyPressHandler} />
        <input
          type="button"
          value="Submit"
          onClick={this.sendInputDataOnSubmit}
        />
      </div>
    );
  }
}

export default CreateGame;
