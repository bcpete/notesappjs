// var obj = {
//     name: 'Brady'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Brady", "age": 23}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};
//convert note object into a String and write to file system
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');

//take string convert back into note object
var note = JSON.parse(originalNoteString);
console.log(typeof note);
console.log(note.title);