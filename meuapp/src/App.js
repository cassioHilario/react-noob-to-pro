import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      form:{
        email: '',
        password: '',
        name: '',
        gender: [
          { id: 0, text: 'Select...'},
          { id: 1, text: 'Male'},
          { id: 2, text: 'Female'},
          { id: 3, text: 'Other'}
        ],
        selectedGender: '',
        age: '',
        rememberMe: false
      }
    };
    this.onFormFildChange = this.onFormFildChange.bind(this);
  }

  onFormFildChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    this.setState({
      form: {
        ...this.state.form,
        [name]: isCheckbox ? checked : value
      }
    });
  }

  render() {
    return (
      <div>
        <h1> Registration Form </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Email: 
            <input type="email" name="email" value={this.state.form.email} onChange={this.onFormFildChange} />
          </label>
          <br />
          <br />
          <label>
            Password: 
            <input type="password" name="password" value={this.state.form.password} onChange={this.onFormFildChange} />
          </label>
          <br/>
          <br/>
          <label>
            Name: 
            <input type="text" name="name" value={this.state.form.name} onChange={this.onFormFildChange} />
          </label>
          <br />
          <br />
          <label>
            Gender:
            <select name="selectedGender" value={this.state.form.selectedGender} onChange={this.onFormFildChange}>
              {this.state.form.gender.map((option) => (
                <option key={option.id} value={option.text}>{option.text}</option>
              ))}
            </select>
          </label>
          <br />
          <br />
          <label>
            Age:
            <input type="number" name="age" value={this.state.form.age} onChange={this.onFormFildChange} />
          </label>
          <br />
          <br />
          <label>
            Remember Me:
            <input type="checkbox" name="rememberMe" checked={this.state.form.rememberMe} onChange={this.onFormFildChange} />
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