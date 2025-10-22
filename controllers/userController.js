const User=require('../models/userModel');

//get all users 
exports.getUsers=async(req,res)=>{
    try{
   const users=await User.find();
   res.json(users);
    }
    catch(err){
res.status(500).json({error:err.message})
    }
};


// get user by ID
exports.getUserById=async(req,res)=>{
    try{
        const user=await User.findById(req.params.id);
        if(!user) return res.status(404).json({message:'User not found'});
        res.json(user);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
};

//delete user by id

exports.deleteUser=async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.json({message:'User Deleted'});  }
    catch(err){
        res.status(500).json({error:err.message});
    }

};


