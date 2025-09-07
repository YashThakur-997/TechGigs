let mongoose=require("mongoose")

const userloginSchema = new mongoose.Schema({  
    username:String,
    password:String,
});

const Userlogin = mongoose.model('login', userloginSchema) 

module.exports=Userlogin;