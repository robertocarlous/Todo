const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require("uuid");
const user=require('../constant/user');
const userId = uuidv4();
const register = async (req, res) =>{
  try{ 
    const user = req.body 
  if(!user.email)
  return res.status(400).json({
    message:"email field is missing",
  });
  if(!user.password)
  return res.status(400).json({
    message:"password field is missing",
  });
  if(!user.name)
  return res.status(400).json({
  message:"name field is missing",
});

return res.status(200).json({
  message:"user created successfully",
  data:user,
  id:userId
})
}catch (error){
  if (error.code === 11000)
  return res.status(400).json({message:error.message})
  throw error;
}
}  

const login = async (req, res) =>{
  try{
    const user = req.body 
    if(!user.email)
    return res.status(400).json({
      message:"email field is missing",
    })
    if(!user.password)
    return res.status(400).json({
      message:"password field is missing",
    });
    
    return res.status(200).json({
      message:"user logged in successfully",
      data:{
        name:user.name,
      },
    });
}catch (error){
  res.status(400).json({message:error.message});
}
}

  module.exports = {register, login};
 

