const NotesModel = require('./notesModel');

class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
    }

    displayNotes() {
        const notes = this.model.getNotes()

        // For each note, you create and append a new element on the main container
        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl)
        })
    }
}

module.exports = NotesView;