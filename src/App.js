import React from 'react'

const Hello = (props) => { //This is called a "component"
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old </p>
    </div>
  )
}

const App = ()=>{
  const age = 10
  const name = 'Soulen'

  return (
  <div>
    <h1>Greetings!</h1>
    <Hello name = {name} age = {age}/>
  </div>
  )
}

export default App