import React, {Component} from 'react';


class Team extends Component {
  render(){
    return(
      <div>
        <h2>Hi, I'm {this.props.name}</h2>
        <p>I'm a {this.props.occupation} and I'm {this.props.age} years old.</p>
        <LinkedIn linkedIn={this.props.linkedIn} />
      </div>
    )
  }
}

class LinkedIn extends Component {
  render(){
    return(
      <p>Connect with me on <a href = {this.props.linkedIn}>LinkedIn</a></p>
    )
  }
}


export default function App(){
  return(
    <div>
      <h1>Meet out Team:</h1>
      <Team name="John" occupation="Developer" age="25" linkedIn="https://www.linkedin.com/in/john" />
      <Team name="Jane" occupation="Designer" age="22" linkedIn="https://www.linkedin.com/in/jane" />
      <Team name="Joe" occupation="Product Manager" age="27" linkedIn="https://www.linkedin.com/in/joe" />
    </div>
  )
}