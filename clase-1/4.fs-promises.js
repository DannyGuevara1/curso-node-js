const fs = require('node:fs/promises')

console.log('Leyendo segundo archivo...')
fs.readFile('./archivo.txt', 'utf-8')
  .then(text => {
    console.log('Primer texto: ', text)
  })

fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('Segundo archivo: ', text)
  })
