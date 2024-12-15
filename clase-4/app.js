import express, { json } from 'express'
import { moviesRouter } from './routes/movies.js'
import { corsMiddleware } from './middlewares/cors.js'

const app = express()
app.disable('x-powered-by')

app.use(json())
app.use(corsMiddleware())

app.use('/movies', moviesRouter)

// // forma de solucionar el problema de cors a metodos complejos como patch/delete/put
// app.options('/movies/:id', (req, res) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
//   res.setHeader('Access-Control-Allow-Methods', 'PATCH, DELETE')
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
//   res.status(200).end()
// })

const port = process.env.PORT ?? 3000

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}`)
})
