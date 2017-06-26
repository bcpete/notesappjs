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






