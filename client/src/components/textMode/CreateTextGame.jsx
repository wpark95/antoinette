import React from 'react';
import axios from 'axios';
import Header from '../Header';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      leftgame: '',
      rightgame: '',
    };
    this.sendInputDataOnSubmit = this.sendInputDataOnSubmit.bind(this);
    this.titleInputHandler = this.titleInputHandler.bind(this);
    this.usernameInputHandler = this.usernameInputHandler.bind(this);
    this.leftGameKeyPressHandler = this.leftGameKeyPressHandler.bind(this);
    this.rightGameKeyPressHandler = this.rightGameKeyPressHandler.bind(this);
  }

  usernameInputHandler(e) {
    this.setState({ username: e.target.value });
  }

  titleInputHandler(e) {
    this.setState({ title: e.target.value });
  }

  leftGameKeyPressHandler(e) {
    this.setState({ leftgame: e.target.value });
  }

  rightGameKeyPressHandler(e) {
    this.setState({ rightgame: e.target.value });
  }

  sendInputDataOnSubmit() {
    const {
      username, title, leftgame, rightgame,
    } = this.state;
    axios.post('/textmode/create', {
      username,
      title,
      leftgame,
      rightgame,
    })
      .then((res) => {
        console.log('Input Post Result From CreateTextGame.jsx : ', res);
      })
      .catch((err) => {
        console.log('Input Post Error From CreateTextGame.jsx : ', err);
      });
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Create Text Game</h1>
        <h2>Title</h2>
        <input type="title" onChange={this.titleInputHandler} />
        <h2>Username</h2>
        <input type="username" onChange={this.usernameInputHandler} />
        <br />
        <h2>Left Game</h2>
        <input type="leftGame" onChange={this.leftGameKeyPressHandler} />
        <br />
        <h2>Right Game</h2>
        <input type="rightGame" onChange={this.rightGameKeyPressHandler} />
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
