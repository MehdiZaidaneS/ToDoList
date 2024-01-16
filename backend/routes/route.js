const {addNote, getNotes} = require("../controllers/functions")

const router = require("express").Router()

router.post("/add-note", addNote)
      .get("/get-notes", getNotes)


module.exports = router