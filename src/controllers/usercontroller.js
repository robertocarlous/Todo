const bcrypt = require("bcrypt")
const verifyToken = require("../helpers/Authtoken")
const {v4:uuidv4} = require("uuid");
const user = require("../constant/user")
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
const userId = uuidv4();
const salt = await bcrypt.genSalt(10);
const hashPassword = bcrypt.hashSync(user.password, salt);
user.password = hashPassword;
return res.status(200).json({
  message:"user created successfully",
  data:user,
})
}catch (error){
  if (error.code === 11000)
  return res.status(400).json({message:error.message})
  throw error;
}
}  

const login = async (req, res) => {
  const username = req.body.name;
  const password = req.body.password;

  try {
    const foundUser = user.find((u) => e.email === email);

    if (!foundUser) {
      return res
        .status(401)
        .json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (passwordMatch) {
      req.session.user = {
        id: foundUser.id, 
        username: foundUser.username,
        email: foundUser.email,
      };
     
      return res
        .status(401)
        .json({ message: "Invalid email or password" });
    }
    const token = generateToken(user);
    return res.status(200).json({
      message: "user logged in successfully",
      data: {
        token,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };

 

  
  