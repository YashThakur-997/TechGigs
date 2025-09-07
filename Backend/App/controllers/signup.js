let usersignup=require("../models/signupmodel")

let handelsignup = async  (req,res)=>{ 
  const {name,password,email,phone} = req.body  
  const user = new usersignup({name,password,email,phone})  
  await user.save().then(()=>{
    console.log("User saved:", user)
  })  // Log the saved user to the console
  res.send('Form received')
}


module.exports={
    handelsignup
}