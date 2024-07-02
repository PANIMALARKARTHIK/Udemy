//console.log('hi');
//console.log("Welcome to my page");
//console.log(global);

//console.log(module);
//const greeting = require('./lib/greeting.js');
//greeting();

//const average = require('.lib/school.js').average;
//console.log(average[70,55,90,100]);

import { createServer } from 'http';

//connection settings = 3000;
const port = 3000;
//hostname:IP which is associated with any device connected a computer network

const hostname = '127.0.0.1';

const respond = (request, response) => 
{
console.log(request);
};

const server = createServer(respond);


server.listen(port, hostname, ()=> {`listening on port, hostname:${hostname}`});