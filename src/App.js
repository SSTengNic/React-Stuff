import { render } from '@testing-library/react'
import react from 'react'
import { useState } from 'react'

const AnecCounter = [0,0,0,0,0,0,0]
const Button = (props) =>{
  return (
    <button onClick={props.click}> {props.text} </button>
  )
}

const CounterCopier =(AnecCounter) =>{
  const Copy = [...AnecCounter]
  console.log(Copy)
  return Copy
}

const RandomGenerator =() => {
  const RandomNum = Math.floor(Math.random()*6)

  return RandomNum 
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  
  console.log("Hello There?")
  let RandomNum = RandomGenerator()
  const [selected, setSelected] = useState(0)
  const [Incre,Inselector] = useState(0)
  
  while (RandomNum == selected){
    RandomNum = RandomGenerator()
  }

  
  const Increment = () => {
    Inselector(Incre+1)
    AnecCounter[selected]+=1
    console.log("AnecCounter increment")
    console.log(AnecCounter[selected])

    
  }
  let max = AnecCounter.indexOf(Math.max(...AnecCounter))

  console.log(selected)
  const Show = AnecCounter[selected]
  return (
    
    <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Has {Show} votes </p>
      <Button click = {()=>Increment()} text = "Vote" />
      <Button click = {()=>setSelected(RandomNum)} text = "Select Anecdote"/>
      
      
      <h1>Anecdote with the most votes</h1>
      {anecdotes[max]}
      
    </div>
  
  )
}

export default App