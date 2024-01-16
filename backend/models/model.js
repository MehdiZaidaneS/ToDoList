const moongose = require("mongoose")

const NoteModel = new moongose.Schema({
    title:{
       type: String,
       required: true,
       trim: true,
       maxLength: 50
    }
}, {timestamps: true})


module.exports = moongose.model("Note", NoteModel)