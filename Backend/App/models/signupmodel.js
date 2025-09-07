let mongoose=require("mongoose")

const usersignupSchema = new mongoose.Schema({  
    name:String,
    password:String,
    email:String,
    phone:String
});

const Usersignup = mongoose.model('signup', usersignupSchema) 

module.exports=Usersignup;