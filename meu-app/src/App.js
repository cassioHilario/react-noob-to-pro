import React, {Component} from "react";
import './style.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      button: 'Start'
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this);
  }

  start() {
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({button: 'Start'});
      return;
    } else {
      this.setState({button: 'Stop'});
      this.timer = setInterval(() => {
        this.setState({timer: this.state.timer + 0.1})
      },100);
    }
  }

  clear(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      timer: 0,
      button: 'Start'
    });
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} alt="stopwatch" className="img"/>
        <a className="timer">{this.state.timer.toFixed(1)}</a>
        <div className="buttonArea">
          <a className="button" onClick={this.start}>{this.state.button}</a>
          <a className="button" onClick={this.clear}>Clear</a>
        </div>
      </div>
    );
  }

}

export default App;