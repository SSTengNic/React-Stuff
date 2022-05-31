//skipped .9 and 2.10
import servicenotes from './service/servicenotes'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Note from './Note'
import { render } from '@testing-library/react'



const ShowInfo =(props) => {
  return (
    <li> {props.name} {props.number} </li>
  )
}
const App = () => {

  const [data,setData] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum,setNewNum] = useState('')
  const [displaymessage,setdisplaymessage] = useState('')
  
  const displaystyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }


  useEffect(()=> {
    servicenotes.getAll().then(response=>{
      setData(response.data)
    console.log("this is the data",data)
    })
  },[]) //saves all the data from the server to the data state

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
      number: newNum
    }

    for (var i =0;i<data.length;i++){
      if (data[i].name === newName)
      {
        var hey = data[i].id
        console.log('going through?')
        checker = false
      }
    }
    if (checker === false){
      if (window.confirm(newName + "Has already been added to the phonebook, replace the old number with a new one?")){
        
        servicenotes.update(hey,InfoObject).then(response => {
          setData(data.map(datax=>datax.id!==hey? datax:InfoObject))
          setdisplaymessage(`Updated ${InfoObject.name}'s number.`)
          setTimeout(()=> {
            setdisplaymessage('')
          },5000)
        }).catch(displayz =>{
          setdisplaymessage(`{Information of ${InfoObject.name} has already been removed from server}`)
          setTimeout(()=> {
            setdisplaymessage('')
          },5000)
          const newData = data.filter(dataz => dataz.id!==hey)
          setData(newData)
        })        
      }
    }

      else if (checker ===true){
        console.log("New Addition Add")
      
        servicenotes.create(InfoObject).then(response => {
          setData(data.concat(response.data))
          setdisplaymessage(
            `Added ${InfoObject.name} `) 
          setTimeout(()=> {
              setdisplaymessage('')
            },5000)
        })
        setNewName('')
        setNewNum('')
      }
    
  }
  
    
    const toggleDelete = (name,id) => {
    
      if (window.confirm(`Delete ${name}`)) {
      servicenotes.deleteinput(id)
      const newData = data.filter(dataz => dataz.id!==id)
      setData(newData)
      }
      
    }


  return (
    
    <div>
      <h2>Phonebook</h2>
      <li style = {displaystyle}>
      {displaymessage}

      </li>
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
      {data.map(datas =>
      <Note key={datas.id} data = {datas} toggleDelete = {()=>toggleDelete(datas.name,datas.id)} />
)}
    </div>
  )
}


export default App