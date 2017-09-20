/**
 * This is an example of how to document routes.
 * @module MyRoutes
 */

'use strict'

var express = require('express')
var app = express()

/**
 * Just says hello.
 * @name Hello
 * @path {GET} /
 * @response {String} hello
 * @response {Array} entries
 */
app.get('/', function (request, response) {
  response.send({ hello: 'world', entries: [] })
})

app.listen(3000, function () {
  console.log('Example app is listening on port 3000, have fun!')
})
