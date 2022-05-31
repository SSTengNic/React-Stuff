//Skipped ex3.8 because im a pussy

const http = require('http') //imports Node's bilt-in webserver module (same as import http from 'http')
const express = require('express')
const { response } = require('express')
const { application } = require('express')
const { json } = require('express/lib/response')
const app = express()
var morgan = require('morgan')


app.use(express.json())

persons = [
    { 
        "id": 1,
        "name": "Arto Hellas", 
        "number": "040-123456"
      },
      { 
        "id": 2,
        "name": "Ada Lovelace", 
        "number": "39-44-5323523"
      },
      { 
        "id": 3,
        "name": "Dan Abramov", 
        "number": "12-43-234345"
      },
      { 
        "id": 4,
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122"
      }
  ]

const IDafterDelete = ()=> {
    persons = persons.map(person=>person.id===(person.id-1))
}

const MaxID = () => {
    const maxId = persons.length
      
    return maxId
}

app.get('/api/persons',(request,response) => {
    response.json(persons)
  })

app.get('/info',(request,response)=> {
    response.send(`
    <p>Phonebook has info for ${MaxID()} people</p>
    <p>${new Date()}</p>
    
    `)
})

app.get('/api/persons/:id',(request,response)=> {

    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)
  if (person) { //if note == true, AKA if the note actually exists
        response.json(person)
        }
  else {
       response.status(404).end()
        }
})

app.delete('/api/persons/:id',(request,response)=>{
  const id = Number(request.params.id)
  persons=persons.filter(person=>person.id !==id)
  response.status(204).end()
})

app.post('/api/persons',morgan('tiny'),(request,response)=>{
    const body = request.body
    const checker = persons.filter(persu=>persu.name===body.name1)
    


    if( !body.number1){
        console.log('test')
        return response.status(400).json({
            error:'content missing! '
        })
    }

    if (checker.length !==0) {

        return response.status(400).json({
            error:'name must be unique'
        })
    }


    const Content = {
        "id": Math.floor(Math.random()*100),
        "name": body.name1,
        "number": body.number1
    }
    persons = persons.concat(Content)
    console.log(Content)
    response.json(Content)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})