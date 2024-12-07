/**
 * @fileoverview Express server setup for handling Pokémon data.
 */

const express = require('express')
const charmanderJson = require('./pokemon/charmander.json')
const PORT = 3000

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })
/**
 * GET /
 * Route serving a simple HTML response with "Pikachu".
 * @name get/
 * @function
 * @memberof module:express.Router
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/', (req, res) => {
  res.send('<h1>Pikachu</h1>')
})

/**
 * GET /pokemon/charmander
 * Route serving Charmander JSON data.
 * @name get/pokemon/charmander
 * @function
 * @memberof module:express.Router
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.get('/pokemon/charmander', (req, res) => {
  res.status(200).json(charmanderJson)
})

/**
 * POST /pokemon
 * Route for creating a new Pokémon entry.
 * @name post/pokemon
 * @function
 * @memberof module:express.Router
 * @inner
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
app.post('/pokemon', (req, res) => {
  req.body.timestamp = Date.now()
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404 Página no encontrada</h1>')
})

/**
 * Starts the Express server on the specified port.
 * @function
 * @memberof module:express
 * @inner
 * @param {number} PORT - The port number on which the server will listen.
 */
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
