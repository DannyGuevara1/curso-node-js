const http = require('node:http')
const fs = require('node:fs')
const port = process.env.PORT ?? 3000
const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('<h1>Bienvenido a la página principal</h1>')
  } else if (req.url === '/imagen') {
    fs.readFile('./nosotros.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Error interno</h1>')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('<h1>Página de contacto</h1>')
  } else {
    res.statusCode = 404
    res.end('<h1>404 Página no encontrada</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`)
})
