const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;

var command = process.argv[2];


if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log('Note created :)!');
        console.log('----------------');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }else {
        console.log('Title taken :(');
    }
}else if (command === 'list') {
    notes.getAll();
}else if (command === 'read') {
    notes.getNote(argv.title);
}else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note deleted' : 'Note not found';
    console.log(message);
}else {
    console.log('Command not recognized');
}

