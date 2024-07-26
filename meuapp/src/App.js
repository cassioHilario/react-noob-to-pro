import React, {Component} from 'react';

class App extends Component {

  // The constructor is the first method that is called when the component is created
  constructor(props) {
    super(props);
    this.state = {
      time: '00:00:00'
    };

  }
  
  /*
    The componentWillMount method is called before the component is mounted.
    This method is called only once in the component lifecycle.
    In another words, this method is called once, each time the component is mounted.
    You should use this method to perform any setup that needs to happen before the component is mounted.
  */
  componentWillMount() {
    console.log('Component will mount');
  }

  /*
    The componentDidMount method is called after the component is rendered.
    This component is called only once in the component lifecycle.
    In another words, this method is called once, each time the component is rendered.
  */
  componentDidMount() {
    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()});
    }, 1000);
  }
  
    /*
      The componentWillUpdate method is called before the component is updated.
      This method is called before the render method.
      This method is called each time the component is updated.
      You should use this method to perform any setup that needs to happen before the component is updated
    */
    componentWillUpdate() {
      console.log('Component will update');
    }
  
    /*
      The shouldComponentUpdate method is called before the component is updated.
      This method is called before the render method.
      This method is called each time the component is updated.
      It's purpose is to determine if the component should be updated or not.
    */
    shouldComponentUpdate() {
      return true;
    }

  /*
    The componentDidUpdate method is called after the component is updated.
    This method is called after the render method.
    This method is called each time the component is updated.
  */
  componentDidUpdate() {
    console.log('Component was updated');
  }

  /*
    The componentWillUnmount method is called before the component is unmounted.
    This method is called only once in the component lifecycle.
    In another words, this method is called once, each time the component is unmounted.
    You should use this method to perform any cleanup that needs to happen before the component is unmounted.
  */
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  render() {
    return (
      <div>
        <h1>My Clock</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default App;