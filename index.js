const { json } = require('express');
var express = require('express')

var server = express()

server.use(express.json())

//Query params = ?name=NodeJs
//Query params = /course/2
//Request body = { name: 'NodeJs', type: 'BackEnd' }
const specialtys = ['Cardiologist', 'Ophthalmologist', 'Pediatrician', 'Surgeon', 'Dentist']


server.get('/specialtys', (req, res) => {
    return res.json(specialtys)
})

server.get('/specialtys/:index', (req, res) => {
    const index = req.params.index
    return res.json(specialtys[index])
})

server.post('/specialtys', (req, res) => {
    const nameOfSpecialtysReq = req.body.name
     specialtys.push(nameOfSpecialtysReq)
     return res.json(specialtys)
})

server.listen(3000)

