const User  = require("../models/user.models");
const jwt = require('../config/jwt.config')
const {userSchema} = require('../models/user.models')
const bcrypt = require('bcrypt');
module.exports.createNewUser = (req, res) => {
    User.create(req.body)
        .then(newlyCreatedUser => res.status(200).json({ NewUser : newlyCreatedUser  }))
        .catch(err => res.status(400).json(err));
};

module.exports.getUsers = (req, res) => {
    User.find(req.body)
        .then(allusers => res.json(allusers))
        .catch(err => res.status(400).json({message:"Something went wrong",error:err}));
}; 
// module.exports.updateExistingPirate = (req, res) => {
//   Joke.findOneAndUpdate({ _id: req.params.pirate_id }, req.body, { new: true })
//     .then(updatedPirate => res.json({ Pirate: updatedPirate }))
//     .catch(err => res.status(400).json({message:"Something went wrong",error:err}));
// };


module.exports.findOne = (req, res) => {
	User.findOne({ _id: req.params.user_id})
		.then(oneuser=> res.json(oneuser))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
}; 



module.exports.deleteAnExistingUser = (request, response) => {
    User.deleteOne({ _id: request.params.user_id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => res.status(400).json({message:"Something went wrong",error:err}));
}

module.exports.login=(req,res)=>{
      
    	User.findOne({email:req.body.email})   
     .then(user=>{
        if(user===null){
            res.status(400).json({msg:"heyy brooo msaybaaa"})
        }else{ 
            bcrypt.compare(req.body.password,user.password)
            .then(passwordIsInvalid=>{
                if(passwordIsInvalid){
                    const jwtSCR = jwt.sign({
                        id:user._id
                    },"SECRET_KEY")
                    res.cookie("userToken",jwtSCR,{httpOnly:true}).json("success")
        }else{
                    res.status(400).json({msg:"Broo efhim rouhik "})
                }
            })
            .catch(err=>res.status(400).json({msg:"Password is wrong"}))
        }
    })
}

  