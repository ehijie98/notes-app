class NotesClient {
    loadNotes(callback, errorCallback) {
        return fetch("http://localhost:3000/notes")
            .then(response => {
                return response.json()
            })
            .then(data => callback(data))
            .catch((error) => {
                console.log("There was a problem with the Fetch GET operation:", error);
                return errorCallback();
            })
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
            console.log(("There was a problem with the Fetch POST operation", error));
        })

    };

};

module.exports = NotesClient;