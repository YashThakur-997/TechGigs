let userlogin=require("../models/loginmodel")

let handellogin = async  (req,res)=>{ 
  const {username,password} = req.body  
  const user = new userlogin({username,password})  
  await user.save().then(()=>{
    console.log("User saved:", user)
  })  // Log the saved user to the console
  res.send('Form received')
}


module.exports={
    handellogin
}