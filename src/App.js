//skipped .9 and 2.10

import { useState } from 'react'
const ShowInfo =(props) => {
  return (
    <li> {props.name} {props.number} </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',number: '1234345', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')

  const handleNewName =(event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const addInfo =(event) => {

    var checker = true
    event.preventDefault()
    const InfoObject = {
      name: newName,
      number: newNum,
      id: persons.length +1
    }

    for (var i =0;i<persons.length;i++){
      if (persons[i].name === newName)
      {
        console.log('going through?')
        checker = false
      }
    }
    if (checker == false){
      window.alert(newName + "Has already been added to the phonebook")
      setNewName('')
    }
      else if (checker ==true){
        console.log("Still adding?")
        setPersons(persons.concat(InfoObject))
        setNewName('')
      }
    }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addInfo}>
        <div>
          name: 
            <input
              value = {newName}
              onChange = {handleNewName}
           />
        </div>
        <div>
         number:
          <input
          value = {newNum}
          onChange = {handleNewNum}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <ShowInfo key={person.id} name = {person.name} number = {person.number}/>
      )}
    </div>
  )
}

export default App