//Asincronismo en paralelo con async-await
import { readFile } from 'node:fs/promises';

Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
])
.then(([archivo1, archivo2]) => {
    console.log(archivo1);
    console.log(archivo2);
});
