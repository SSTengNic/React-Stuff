import React, {useState} from 'react'

const Display =(props)=> { //We make this so that we can call this function easily for other components in the future
  return(
  <div>{props.Discounter}</div>
    )
}

const Buttons =(props) =>{
  return (
    <button onClick ={props.onClick}>{props.text}</button>
  )
}

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increasebyOne = ()=>setCounter(counter+1)
  const DecreasebyOne = ()=>setCounter(counter-1)
  const setToZero = () => setCounter(0)
  /*
  const handleClick = () => {
    return(
    console.log('clicked'),
    setCounter(counter+1)
    )
    */
  
  return (
    <div> 
      <h1><Display Discounter = {counter}/></h1>
      <Buttons onClick={increasebyOne} text = 'plus'/>  
      <Buttons onClick = {DecreasebyOne} text = 'Minus' />
      <Buttons onClick={setToZero} text = 'Reset' />
    </div> 
  )
}
// Event Handlers have to be either a function, or a function reference. It cannot be a function call.
//This is why i cannot do "onClick =(setCounter(0)), because that would be a function call"
/*
const App = () => {
  const [ counter, setCounter ] = useState(0) //Adds "state" to the component and initializes it with a value of 0 
  console.log("Counter:", counter) 
  setTimeout(    
    () => setCounter(counter + 1), //React re-executees the component
    5000
    )
    console.log("Counter:", counter) 

  return (
    <div>{counter}</div>
  )
  
}
*/

/*
const App = (props) => {
  const {counter} = props
  return (
    <div>
       <h1>
        {counter}
       </h1>
    </div>
  )
}
*/


export default App