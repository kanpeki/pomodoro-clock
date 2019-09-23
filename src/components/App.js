import React, { Component }  from 'react';
import DurationSetter from './DurationSetter';
import TimerDisplay from './TimerDisplay';
import '../styles/App.css';

const defaults = {
  breakLength: 5,
  sessionLength: 25,
  breakType: "break",
  sessionType: "session"
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      isPaused: true
    };
  }

  increaseDuration = (type) => {
    if (type === defaults.breakType)
    {
      this.setState({breakLength: this.state.breakLength + 1});
    }
    if (type === defaults.sessionType)
    {
      this.setState({sessionLength: this.state.sessionLength + 1});
    }
  }

  decreaseDuration = (type) => {
    if (type === defaults.breakType)
    {
      this.setState({breakLength: this.state.breakLength - 1});
    }
    if (type === defaults.sessionType)
    {
      this.setState({sessionLength: this.state.sessionLength - 1});
    }
  }

  toggleIsPaused = () => {
    this.setState({isPaused: !(this.state.isPaused) });
  }

  reset = () => {
    this.setState({
      breakLength: defaults.breakLength,
      sessionLength: defaults.sessionLength
    });
  }

  render() {
    return (
      <div className="app-container">
        <h1>Pomodoro Clock</h1>
        <br />
        <div class="duration-setters">
          <DurationSetter type={defaults.breakType}   duration={this.state.breakLength}   up={this.increaseDuration.bind(this)} down={this.decreaseDuration.bind(this)} />
          <DurationSetter type={defaults.sessionType} duration={this.state.sessionLength} up={this.increaseDuration.bind(this)} down={this.decreaseDuration.bind(this)} />
        </div>
        
        <TimerDisplay reset={this.reset.bind(this)}/>
      </div>
    );
  }
}

export default App;
