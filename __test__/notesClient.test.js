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

        client.loadNotes((noteInfo) => {
            expect(noteInfo.length).toBe(1);
            expect(noteInfo.content).toBe("fake note");
            done()
        })
    })
})