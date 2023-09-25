class NotesView {
    constructor(model, client) {
        this.model = model;
        this.client = client
        this.mainContainerEl = document.querySelector('#main-container');
        this.addButtonEl = document.querySelector('#add-note-button');

        this.addButtonEl.addEventListener('click', () => {
            const newNote = document.querySelector('#note-input').value;
            this.addNewNote(newNote);

            document.querySelector('#note-input').value = ""
        });
    }

    displayNotes() {
        const notesToRemove = document.querySelectorAll('div.note');
        notesToRemove.forEach((note) => {
            // console.log('Deleting note');
            note.remove();
            // console.log('Note should be deleted');
        });

        
        const notes = this.model.getNotes(); 

        // For each note, you create and append a new element on the main container
        notes.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl)
        })
    };

    addNewNote(note) {
        this.client.createNote(note)
        .then((data) => {
            console.log(data);
            this.displayNotesFromApi()
        });
    };

    displayNotesFromApi() {
        this.client.loadNotes(notes => {
            this.model.setNotes(notes);
            this.displayNotes();
        })
    }
}

module.exports = NotesView;