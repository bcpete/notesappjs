const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .help()
    .argv;
var command = process.argv[2];


if (command === 'add'){
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        notes.logNote(note);
    }else {
        console.log('Title taken :(');
    }
}else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
}else if (command === 'read') {
    var note = notes.getNote(argv.title);
    var message = note ? notes.logNote(note) : 'Note not found';
    console.log(message);
}else if (command === 'remove'){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note deleted' : 'Note not found';
    console.log(message);
}else {
    console.log('Command not recognized');
}

