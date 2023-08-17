/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./../src/notesModel');
const NotesView = require('./../src/notesView');


describe('NotesView class', () => {
    it('displays two notes', () => {
        document.body.innerHTML = fs.readFileSync('./index.html');

        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('First note');
        model.addNote('Second note');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(2)

    })
})