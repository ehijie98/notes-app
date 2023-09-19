const NotesClient = require('./../src/notesClient.js');

require('jest-fetch-mock').enableMocks();

describe('NoteClient class', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('calls fetch and loads data', async () => {
        const notesClient = new NotesClient();

        fetch.mockResponseOnce(JSON.stringify({
            content: "fake note"
        }));

        const response = await notesClient.loadNotes((noteInfo) => {
            expect(noteInfo.content).toEqual("fake note");
            expect(fetch.mock.calls.length).toEqual(1);
            expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/notes')
        });
       
    })

    it('calls fetch and posts new data', async () => {
        const notesClient = new NotesClient();

        fetch.mockResponseOnce(JSON.stringify({
            content: "fake note"
        }));
        
        const response = await notesClient.createNote("fake note")
        expect(response).toEqual({"content": "fake note"});
        
       
    })
})