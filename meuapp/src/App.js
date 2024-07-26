import React from 'react';


const HelloWord = () => {
  return(
    <h1>Hello World</h1>
  )
}


const Welcome = (props) => {
  return(
    <h3>Welcome, {props.name}</h3>
  )
}


export default function App(){
  return(
    <div>
      <HelloWord />
      <h2>Desenvolvendo meu primeiro App React.</h2>
      <Welcome name="Cassio" />
    </div>
  )
}