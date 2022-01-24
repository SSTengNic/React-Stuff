import react from 'react'
import { useState } from 'react'

const Total =(good,neutral,bad)=>{
  const Totals = good + neutral + bad
   return Totals
 }

 const Average = (good,bad,Totals) =>{
  const Averages = (good + bad)/Totals
  return Averages
}

const Positive =(good,Totals) =>{
  const Positives = (good/Totals)*100
  return Positives
}

const StatisticLine = (props) => {
  return (
    <div>
      <p> {props.text} {props.value} </p>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick = {props.click}>{props.text}</button>
  )
}

const Statistics =(props) =>{
  if (props.AnyFeedback ==0){
    return (
      <div>No feedback given</div>
    )
    
  }
  return(
  <div>
    <h1>statistics</h1>
      <table>
        <tbody>
        <tr>
          <td><StatisticLine text = "good"/></td>
          <td><StatisticLine value = {props.good}/> </td>
        </tr>

        <tr>
          <td><StatisticLine text = "neutral"/></td>
          <td><StatisticLine value = {props.neutral}/> </td>
        </tr>
        
        <tr>
          <td><StatisticLine text = "bad"/></td>
          <td><StatisticLine value = {props.bad}/> </td>
        </tr>

        <tr>
          <td>all</td>
          <td>{props.Totals}</td>
        </tr>

        <tr>
        <td>average</td>
          <td>{props.Averages}</td>
        </tr>

        <tr>
          <td>positive</td>
          <td>{props.Positives}%</td>
        </tr>

        </tbody>
      </table>
     

  </div>
  )
}

const App =()=> {
  const [good,goodCounter] =useState(0)
  const [neutral,neutralCounter] =useState(0)
  const [bad,badCounter] =useState(0)


  const Totals = Total(good,neutral,bad)
  const Averages = Average(good,bad,Totals)
  const Positives = Positive(good,Totals)


  return (
    <div>
      <h1>give feedback</h1>
      <Button click = {()=>goodCounter(good+1)} text = "good" />
      <Button click = {()=>neutralCounter(neutral+1)} text = "neutral" />
      <Button click = {()=>badCounter(bad+1)} text = "bad" />
      <Statistics AnyFeedback = {Totals} good={good} neutral = {neutral} bad = {bad} Totals = {Totals} Averages = {Averages} Positives = {Positives}/>
    </div>
    

  )
}


export default App;
