const so= require('os');
const plat= so.platform();
console.log(plat);

const emoji= require('node-emoji');
console.log(emoji.get('coffee'));

const ciudades = require('./ciudades');

console.log(ciudades.popayan());
console.log(ciudades.cali());
console.log(ciudades.medellin());                                  

const fs = require('fs');

fs.readFile('./datos.txt','utf8',(err,datos) =>{
    if(err) return;
    console.log(datos);

});

