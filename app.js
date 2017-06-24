console.log('starting app.js');
//third party modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//my modules
const notes = require('./notes.js');

const argv = yargs.argv;
//grab the command line arg for the command
var command = process.argv[2];


//what to do with each command line arg
if (command === 'add'){
    notes.addNote(argv.title, argv.body);
}else if (command === 'list') {
    notes.getAll();
}else if (command === 'read') {
    notes.getNote(argv.title);
}else if (command === 'remove'){
    notes.removeNote(argv.title);
}else {
    console.log('Command not recognized');
}

