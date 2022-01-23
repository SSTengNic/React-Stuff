import React from "react";

const Hello = ({name,age})=> { //You can also do this too, its destructuring as well
    const age = props.age //This is called destrucutring, it simplifies your code
    const {name, age} = props // You can do this too, to destructure multiple variables at once
    const bornYear = () =>{

        const yearNow = new Date().getFullYear()
        return yearNow-age
    }
    return (
        <div>
            <p>
                Hello {props.name}, you are {age} years old
            </p>
            <p>
                You were probably born in {bornYear()}
            </p>
        </div>
    )
}

const App = ()=> {
    const name = 'Peter'
    const age = 10

    return (
        <div>
            <h1> Greetings</h1>
            <Hello name = "Maya" age = {26+10}/>
            <Hello name = {name} age = {age}/>
        </div>
    )

}

export default App