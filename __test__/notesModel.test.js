const NotesModel = require('./../src/notesModel.js');

describe('NotesModel class', () => {
    it('initially constructs', () => {
        const model = new NotesModel();
    });

    it('initially returns empty list of notes using getNotes()', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });

    it('returns updated list of notes added using addNote method', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
    });

    it('resets list of notes using reset method', () => {
        const model = new NotesModel();
        model.addNote('Buy milk');
        model.addNote('Go to the gym');
        expect(model.getNotes()).toEqual(['Buy milk', 'Go to the gym']);
        model.reset();
        expect(model.getNotes()).toEqual([]);
    })
})
