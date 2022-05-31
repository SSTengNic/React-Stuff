import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import { isCompositeComponent } from 'react-dom/test-utils'



function App() {
  const [SearchCountries, SetSearchCountries] = useState('')
  const [Package, SetPackage] = useState([])
  var Tracker = []

  const HandleInfo = (event) => {
    SetSearchCountries(event.target.value)
    console.log(event.target.value)
  }

  
  
  useEffect(() => {
        console.log('effect')
        axios
              .get('https://restcountries.com/v3.1/all')
              .then(response => {
              console.log('promise fulfilled') 
              SetPackage(response.data)
               })  }, [])



console.log(Package.length)
  return (
    <div>
      <input
        value = {SearchCountries}
        onChange = {HandleInfo}
        />
        {Package.filter((val)=>{
        if (SearchCountries ==""){
          return val
        }
        else if (val.name.common.toString().toLowerCase().includes(SearchCountries.toString().toLowerCase())) {
          Tracker.push(val.name.common)
            return (
              console.log("Tracker is ", Tracker),
              val
            )
        }
        }).map((val,key) => {
          if (Tracker.length !== 1){
            return (<div key = {key}> <p>{val.name.common}</p></div>)
          }
          else if (Tracker.length === 1){

            var LangSpeller = Object.values(val.languages)
            console.log(LangSpeller)
            return (

            <div>
                  <h2>{val.name.common}</h2>
                  <p>capital {val.capital} </p>
                  <p>area {val.area}</p>
                  <h3>Languages</h3>
                  <ul>
                    {LangSpeller.map(langu=>
                    <li key = {key}>{langu}</li>
                    )}
                  </ul>
                  <p>{val.flag}</p>


      
                 
            </div>)
          }
          
        })}
  
    </div>
  )
}

export default App;
