const NotesModel = require('./../src/notesModel.js');

describe('NotesModel class', () => {
    it('initially constructs', () => {
        const model = new NotesModel();
    });

    it('initially returns empty list of notes using getNotes()', () => {
        const model = new NotesModel();
        expect(model.getNotes()).toEqual([]);
    });
})
