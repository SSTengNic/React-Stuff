import React from 'react'

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
  }

  const Part = (props) => {
    
    return(
      <div>
        <p>{props.part} {props.exercises}</p>
      </div>
    )
  }

const Content = (props) => {
  return (
    <div>
      <Part part = "Fundamentals of React" exercises = {10} />

      <Part part = "Using props to pass data" exercises = {7}/>

      <Part part = "State of a component" exercises = {14}/>

    </div>
    /*
    <div>

       <p>{props.part1} {props.exercises1}</p>
        <p>{props.part2} {props.exercises2}</p>
        <p>{props.part3} {props.exercises3}</p>
  
    </div>
    */
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>Number of Exercises {props.TotalExercise}</p>
    </div>
  )
}

const App = (props) => {
  const course = 'Half Stack application development'
  //const part1 = 'Fundamentals of React'
  const exercises1 = 10
  //const part2 = 'Using props to pass data'
  const exercises2 = 7
  //const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      
      <Content />
      
      <Total TotalExercise = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}


export default App