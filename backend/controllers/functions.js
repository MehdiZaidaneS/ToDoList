const NoteModel = require("../models/model")

exports.addNote = async(req, res) =>{

    const {title} = req.body;
    const newNote = NoteModel({
        title,
        status: false,
        selected: false
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


exports.deleteNote = async (req, res) =>{
    
    const {id} = req.params;
    NoteModel.findByIdAndDelete(id)
    .then((note)=>{
        res.status(200).json({message: "Note Deleted!"})
    })
    .catch((error)=>{
        res.status(500).json({message: "Couldnt deleted!"})
    })
}


exports.updateNote = async (req, res)=>{
    
    const db = NoteModel.db.collection("notes");
    const {title, status} = req.body;
    try {
        await db.updateOne({ title: title },
            {
              $set: {
                "status" : !status
              },
              $currentDate: { updatedAt: true }
            })
        res.status(200).json({message: "Note updated!"})
    } catch (error) {
        res.status(500).json({message: "Couldnt update the note!"})
        console.log("error")
    }
}

exports.changeNoteName = async (req, res)=>{
    const db = NoteModel.db.collection("notes");
    const {title, newTitle} = req.body;
    try {
        await db.updateOne({ title: title },
            {
              $set: {
                "title" : newTitle
              },
              $currentDate: { updatedAt: true }
            })
        res.status(200).json({message: "Name changed!"})
    } catch (error) {
        res.status(500).json({message: "Couldnt change the name!"})
        console.log("error")
    }
}



exports.changeSelected = async (req, res)=>{
    
    const db = NoteModel.db.collection("notes");
    const {title, selected} = req.body;
    try {
        await db.updateOne({ title: title },
            {
              $set: {
                "selected" : !selected
              },
              $currentDate: { updatedAt: true }
            })
        res.status(200).json({message: "Status updated!"})
    } catch (error) {
        res.status(500).json({message: "Couldnt update the status!"})
        console.log("error")
    }
}