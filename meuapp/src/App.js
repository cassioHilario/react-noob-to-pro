import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      gender: [
        { id: 1, text: 'Male'},
        { id: 2, text: 'Female'},
        { id: 3, text: 'Other'}
      ],
      selectedGender: '',
      age: '',
      rememberMe: false
    };
  }

  render() {
    return (
      <div>
        <h1> Registration Form </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Email: 
            <input type="email" name="email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
          </label>
          <br />
          <br />
          <label>
            Password: 
            <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
          </label>
          <br/>
          <br/>
          <label>
            Name: 
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
          </label>
          <br />
          <br />
          <label>
            Gender:
            <select value={this.state.selectedGender} onChange={(e) => this.setState({selectedGender: e.target.value})}>
              {this.state.gender.map((option) => (
                <option key={option.id} value={option.text}>{option.text}</option>
              ))}
            </select>
          </label>
          <br />
          <br />
          <label>
            Age:
            <input type="number" name="age" value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />
          </label>
          <br />
          <br />
          <label>
            Remember Me:
            <input type="checkbox" name="rememberMe" checked={this.state.rememberMe} onChange={(e) => this.setState({ rememberMe: e.target.checked })} />
          </label>
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default App;