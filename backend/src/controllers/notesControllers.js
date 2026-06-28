import Note from "../models/Note.js";

async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({createdAt: -1}); // =1 will sort in desc. order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ messaje: "Internal server error" });
  }
}

async function getNoteById(req, res) {
  try {
    const note = await Note.findById(req.params.id)
    if(!note) return res.status(404).json({messaje: "Note not found"})
    res.json(note);
  } catch (error) {
    console.error("Error in getNoteById controller", error);
    res.status(500).json({ messaje: "Internal server error" });
  }
}

async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error("Error in createNote controller", error);
    res.status(500).json({ messaje: "Internal server error" });
  }
}

async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true});
    if(!updateNote) return res.status(404).json({messaje: "Note not found"})
    res.status(200).json({ messaje: "Note updated succesfully" });
  } catch (error) {
    console.error("Error in updateNote controller", error);
    res.status(500).json({ messaje: "Internal server error" });
  }
}

async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id)
    if(!deletedNote) return res.status(404).json({messaje: "Note not found"})
    res.status(200).json({messaje: "Note deleted succesfully"})
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ messaje: "Internal server error" });
  }
}


export { getAllNotes, createNote, updateNote, deleteNote, getNoteById };
