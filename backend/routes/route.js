const {addNote, getNotes, deleteNote, updateNote} = require("../controllers/functions")

const router = require("express").Router()

router.post("/add-note", addNote)
      .get("/get-notes", getNotes)
      .delete("/delete-note/:id", deleteNote)
      .post("/update-note", updateNote)


module.exports = router