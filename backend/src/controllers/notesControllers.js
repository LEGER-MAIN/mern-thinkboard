function getAllNotes(req, res) {
  res.status(200).send("You just fetched the notes");
}

function createNote(req, res) {
  res.status(201).send("Note created succesfully");
}

function updateNote(req, res) {
  res.status(200).send("Note updated succesfully");
}

function deleteNote(req, res) {
  res.status(200).send("Note deleted succesfully");
}

export {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote
}