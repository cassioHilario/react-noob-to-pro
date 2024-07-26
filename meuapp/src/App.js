import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.sum = this.sum.bind(this);
    this.subtract = this.subtract.bind(this);

  }

  sum() {
    let state = this.state;
    state.counter += 1;
    this.setState(state);
  }

  subtract() {
    if (this.state.counter === 0) {
      return;
    }
    let state = this.state;
    state.counter -= 1;
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <h3>
          <button onClick={this.subtract}>-</button>
          {this.state.counter}
          <button onClick={this.sum}>+</button>
        </h3>

      </div>
    );
  }
}

export default App;