/**
 * @jest-environment jsdom
 */

const fs = require('fs');

const NotesModel = require('./../src/notesModel');
const NotesView = require('./../src/notesView');

describe('NotesView class', () => {
    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync('./index.html');
    });

    it('displays two notes', () => {
        const model = new NotesModel();
        const view = new NotesView(model);
        model.addNote('First note');
        model.addNote('Second note');
        view.displayNotes();
        expect(document.querySelectorAll('div.note').length).toEqual(2);

    });

    it('displays a new note from user input', () => {
        const model = new NotesModel();
        const view = new NotesView(model);
        const input = document.querySelector('#note-input'); 
        input.value = "Test note";

        const button = document.querySelector("#add-note-button");
        button.click();
        expect(document.querySelectorAll('div.note').length).toEqual(1);
        expect(document.querySelectorAll('div.note')[0].textContent).toEqual("Test note")
    })

    it('displays correct number of notes', () => {
        const model = new NotesModel();
        const view = new NotesView(model);
        const input = document.querySelector('#note-input');
        input.value = "First note";

        const button = document.querySelector("#add-note-button");
        button.click();

        const secondInput = document.querySelector('#note-input');
        secondInput.value = "Second note";
        button.click();

        expect(document.querySelectorAll('div.note').length).toEqual(2);


    })
})