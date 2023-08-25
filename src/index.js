const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

console.log("The notes app is running");
const model = new NotesModel();
console.log(model.getNotes());
const view = new NotesView(model);
view.displayNotes()

