//Asincrono con async y await secuencial
const { readFile } = require('node:fs/promises');

//IIFE
(
    async () => {
        console.log('Leyendo segundo archivo...');
        const text = await readFile('./archivo.txt','utf-8');
        console.log('Primer texto: ',text);

        const text2 = await readFile('./archivo2.txt','utf-8');
        console.log('Segundo archivo: ',text2);
    }
)();
