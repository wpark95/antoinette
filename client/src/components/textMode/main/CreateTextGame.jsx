import React from 'react';
import axios from 'axios';
import Header from '../../Header';

class CreateGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      title: '',
      leftgame: '',
      rightgame: '',
    };
    this.postInputDataOnSubmit = this.postInputDataOnSubmit.bind(this);
    this.titleInputHandler = this.titleInputHandler.bind(this);
    this.usernameInputHandler = this.usernameInputHandler.bind(this);
    this.leftGameInputHandler = this.leftGameInputHandler.bind(this);
    this.rightGameInputHandler = this.rightGameInputHandler.bind(this);
    this.clearInputDataOnSubmit = this.clearInputDataOnSubmit.bind(this);
  }

  usernameInputHandler(e) {
    this.setState({ username: e.target.value });
  }

  titleInputHandler(e) {
    this.setState({ title: e.target.value });
  }

  leftGameInputHandler(e) {
    this.setState({ leftgame: e.target.value });
  }

  rightGameInputHandler(e) {
    this.setState({ rightgame: e.target.value });
  }

  postInputDataOnSubmit() {
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
    this.clearInputDataOnSubmit();
  }

  clearInputDataOnSubmit() {
    this.setState({
      username: '',
      title: '',
      leftgame: '',
      rightgame: '',
    });
  }

  render() {
    const {
      username, title, leftgame, rightgame,
    } = this.state;

    return (
      <div>
        <Header />
        <h1>Create Text Game</h1>
        <form>
          <h2>Title</h2>
          <input type="title" value={title} onChange={this.titleInputHandler} />
          <h2>Username</h2>
          <input type="username" value={username} onChange={this.usernameInputHandler} />
          <br />
          <h2>Left Game</h2>
          <input type="leftGame" value={leftgame} onChange={this.leftGameInputHandler} />
          <br />
          <h2>Right Game</h2>
          <input type="rightGame" value={rightgame} onChange={this.rightGameInputHandler} />
          <input
            type="button"
            value="Submit"
            onClick={this.postInputDataOnSubmit}
          />
        </form>
      </div>
    );
  }
}

export default CreateGame;
