import React from 'react';


const Team = (props) => {
  return(
    <div>
      <h2>Hi, I'm {props.name}</h2>
      <p>I'm a {props.occupation} and I'm {props.age} years old.</p>
      <LinkedIn linkedIn={props.linkedIn} />
    </div>
  )
}

const LinkedIn = (props) => {
  return(
    <p>Connect with me via <a href={props.linkedIn} target="_blank">LinkedIn</a></p>
  )
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