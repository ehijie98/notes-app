class NotesClient {
    loadNotes(callback) {
        fetch("http://localhost:3000/notes")
            .then(response => response.json())
            .then(data => callback(data));
    };

    createNote(notes) {
        return fetch("http://localhost:3000/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"content": notes})
        })
        .then((response) => {
            console.log("response:", response.ok);
            return response.json();
        })
        .then((data) => {
            console.log("Success", data)
            return data;
        })
        .catch((error) => {
            console.error(("Error", error));
        })
    };

};

module.exports = NotesClient;