import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, 
    document.getElementById('root'))
/*
let indexcounter = 1
const Refresh =() =>{
    ReactDOM.render(<App counter ={indexcounter}/>,document.getElementById('root'));
}

setInterval(() => {
    Refresh()
    indexcounter += 1
  }, 1000)
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

