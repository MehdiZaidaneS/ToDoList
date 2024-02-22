const {addNote, getNotes, deleteNote, updateNote, changeSelected} = require("../controllers/functions")

const router = require("express").Router()

router.post("/add-note", addNote)
      .get("/get-notes", getNotes)
      .delete("/delete-note/:id", deleteNote)
      .post("/update-note", updateNote)
      .post("/change-status", changeSelected)


module.exports = router