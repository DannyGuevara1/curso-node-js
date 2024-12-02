//Asincronía con callbacks
const fs = require('node:fs');

console.log('Leyendo segundo archivo...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(text);
});

fs.readFile('./archivo2.txt', 'utf-8', (err, secondText) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(secondText);
});
