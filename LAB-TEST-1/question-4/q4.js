const event = require('events');
const moment = require('moment');

const eventEmitter = new event.EventEmitter();



// to ES6 Syntax
const currentTimeCallback = () => moment (new Date());
let currentTime = currentTimeCallback().format(' h:mm:ss a');


eventEmitter.on('currentTime', () => console.log( `Current Time : ${currentTime}`));

eventEmitter.emit('currentTime');