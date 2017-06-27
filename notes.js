const fs = require('fs');

//gets all notes in notes-data.json, if there isnt a notes-data.json returns
//empty array
var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch(e){
        return [];
    }
};

//writes notes array to notes-data.json
var saveNotes = (notes) => {
    fs.writeFile('notes-data.json', JSON.stringify(notes));
};

//create note object, add it to the notes array write the array to the 
//notes-data.json folder
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }else{
        
    }

};

var getAll = () => {
    var notes = fetchNotes();
    return notes;
};

var getNote = (title) => {
    var notes = fetchNotes();
    var noteToRead = notes.filter((note) => note.title === title);
    return noteToRead[0];
}

var removeNote = (title) => {
    //fetch all notes
    var notes = fetchNotes();
    //filter notes, removing one with title
    var newNotes = notes.filter((note) => note.title !== title);
    //save new notes array
    saveNotes(newNotes);
    //return true if note was removed, false if note was not removed.
    return notes.length !== newNotes.length;
}

var logNote = (note) => {
    console.log("Success! :D")
    console.log('-----------');
    console.log(`Title: ${note.title}`);
    console.log(`Body:  ${note.body}`);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote, 
    logNote
};






