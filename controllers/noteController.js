const Note=require('../models/noteModel');

//get all Notes for a user 
exports.getNotes=async(req,res)=>{
    try{
        const {userId}=req.body;
        const notes=await Note.find({userId});
        res.json(notes);

    } catch(err){
        res.status(500).json({error: err.message});
    }
};
//create a new note associated with the user

exports.createNote=async(req,res)=>{
    try{
        const {title,message,userId}=req.body;
        const note=new Note({title,message,userId});
        await note.save();
        res.status(201).json(note);
    } catch(err){
        res.status(500).json({error:err.message});
    }
};

//edit a note


//delete a note

exports.deleteNote=async(req,res)=>{
try{
    await Note.findByIdAndUpdate(req.params.id);
    res.json({message:'Note deleted'});
} catch(err){
    res.status(500).json({error:err.message});
}

};
