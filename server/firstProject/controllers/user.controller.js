
 
const User= require('../model/UserSchema');

const createUser = async (req, res ) => {
  const newUser = new User ({
    name : req.body.name,
    password: req.body.password,
    email:req.body.email,
    phone:req.body.phone
  })
  try {
    await newUser.save();
    res.status(201).json(newUser);
  }catch {
    res.status(400).json({message:"error"})
  }

}

module.exports = {createUser}