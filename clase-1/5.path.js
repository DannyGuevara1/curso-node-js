const path = require('node:path')

console.log(path.sep)

// unir rutas con path.join

const pathArchivo = path.join('carpeta', 'subcarpeta', 'archivo.txt')
console.log(pathArchivo)

const baseName = path.basename(pathArchivo)
console.log(baseName)

const extension = path.extname('my.super.cool.file.txt')
console.log(extension)
