const NotesModel = require('./notesModel');

class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');
        this.addButtonEl = document.querySelector('#add-note-button');

        this.addButtonEl.addEventListener('click', () => {
            const newNote = document.querySelector('#note-input').value;
            this.addNewNote(newNote);

            document.querySelector('#note-input').value = ""
        });
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
    };

    addNewNote(note) {
        this.model.addNote(note);
        this.displayNotes();
    }
}

module.exports = NotesView;