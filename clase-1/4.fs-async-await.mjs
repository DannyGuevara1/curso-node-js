import { readFile } from 'node:fs/promises';


console.log('Leyendo segundo archivo...');
const text = await readFile('./archivo.txt', 'utf-8');
const text2 = await readFile('./archivo2.txt', 'utf-8');
console.log('Primer texto: ',text);
console.log('Segundo archivo: ',text2);
