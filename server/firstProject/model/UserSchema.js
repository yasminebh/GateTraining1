const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  phone: Number
});



module.exports = mongoose.model('users', userSchema)
