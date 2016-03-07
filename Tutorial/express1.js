var express = require('express')
var app = express()

var port = process.argv[2]

app.get('/lights', function (request, response) {
  var lights = ['kitchen', ' living-room', ' garden'].toString()
  console.log(lights)
  response.send(lights + ' \n')
})

app.listen(port, function () {
  console.log('Running Express at port: ' + port)
})
