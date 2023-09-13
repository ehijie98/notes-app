const NotesClient = require('./../src/notesClient.js');

require('jest-fetch-mock').enableMocks();

describe('NoteClient class', () => {
    beforeEach(() => {
        fetch.mockClear();
    })
    it('calls fetch and loads data', (done) => {
        const notesClient = new NotesClient();

        fetch.mockResponseOnce(JSON.stringify({
            length: 1,
            content: "fake note"
        }));

        notesClient.loadNotes((noteInfo) => {
            expect(noteInfo.length).toBe(1);
            expect(noteInfo.content).toBe("fake note");
            done();
        })
    })

    it('calls fetch and posts new data', (done) => {
        const notesClient = new NotesClient();

        fetch.mockResponseOnce(JSON.stringify({
            content: "fake note"
        }));
        
        return notesClient.createNote("test note two")
        .then((result) => {
            expect(result[1]).toEqual({"content": "test note two"})
        })
       
    })
})