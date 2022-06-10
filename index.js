var express = require('express')

var server = express()

//Query params = ?name=NodeJs
//Query params = /course/2
//Request body = { name: 'NodeJs', type: 'BackEnd' }
const namesToTest = ['Arthur', 'Fábio', 'Dior', 'Heughy', 'Bruto']

server.get('/courses/', (req, res) => {
    const index = req.query.index
    return res.json(namesToTest[index])
})


server.listen(3000)

