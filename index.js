const { json } = require('express');
var express = require('express')

var server = express()

server.use(express.json())

//Query params = ?name=NodeJs
//Query params = /course/2
//Request body = { name: 'NodeJs', type: 'BackEnd' }
const specialtys = ['Cardiologist', 'Ophthalmologist', 'Pediatrician', 'Surgeon', 'Dentist']


//server.use((req, res, next) => {
// console.log(`STOP ENDPOINT ${req.url}`)
//return next();
//})


const checkSpecialty = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({ Error: "Specialty name cannot be empty" })
    }
    return next()
}


server.get('/specialtys', (req, res) => {
    return res.json(specialtys)
})

server.get('/specialtys/:index', (req, res) => {
    const index = req.params.index
    return res.json(specialtys[index])
})

server.post('/specialtys', checkSpecialty, (req, res) => {
    const nameOfSpecialtysReq = req.body.name
    specialtys.push(nameOfSpecialtysReq)
    return res.json(specialtys)
})

server.put('/specialtys/:index', (req, res) => {
    const index = req.params.index
    const nameOfSpecialty = req.body.name

    specialtys[index] = nameOfSpecialty

    return res.json(specialtys)
})

server.delete('/specialtys/:index', (req, res) => {
    const index = req.params.index
    specialtys.splice(index, 1)

    return res.json(specialtys)
})


server.listen(3000)

