console.log('Starting notes.js');

const fs = require('fs');

//Take inpute from command line, create note object, add it to the notes array,
//write the array to the notes-data.json folder
var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body
    };

    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    }catch(e){

    }

    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        fs.writeFile('notes-data.json', JSON.stringify(notes));
    }else{
        console.log('Title already taken. Please choose a different title');
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log(`Getting note ${title}`);
}

var removeNote = (title) => {
    console.log(`Removing note ${title}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
};






