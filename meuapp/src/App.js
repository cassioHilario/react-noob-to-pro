import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: true
    };
  }

  render() {
    return (
      <div>
        
        {this.state.status 
          ?

          <div>
            <h1>Hello Cassio!</h1>
            <button onClick={() => this.setState({status: false})}>Logout</button>
          </div>

          :
          
          <div>
            <h1>Hello World!</h1>
            <button onClick={() => this.setState({status: true})}>Login</button>
          </div>
        }

      </div>
    );
  }
}

export default App;