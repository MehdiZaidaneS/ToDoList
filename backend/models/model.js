const moongose = require("mongoose")

const NoteModel = new moongose.Schema({
    title:{
       type: String,
       required: true,
       trim: true,
       maxLength: 50
    },
    status:{
        type: Boolean,
        required: true,
       
    }
}, {timestamps: true})


module.exports = moongose.model("Note", NoteModel)