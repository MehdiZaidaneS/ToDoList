const NoteModel = require("../models/model")

exports.addNote = async(req, res) =>{

    const {title} = req.body;
    const newNote = NoteModel({
        title,
        status: false
    })
    try{
        if(!title){
            return res.status(400).json({message: "All field required!"})
            
        }

        await newNote.save()
        res.status(200).json({message: "Data saved in database!"})

    }catch(error){
        res.status(500).json({message: "Couldnt save the data!"})
        console.log("error")
    }
    console.log(newNote);
}


exports.getNotes = async(req, res) =>{

    try {
        const notes = await NoteModel.find()
        res.status(200).json(notes)
    } catch (error) {
        res.status(500).json({message: "Couldnt get the data!"})
    }
}
