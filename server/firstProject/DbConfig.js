
const mongoose = require("mongoose");
const server ='mongodb://localhost:27017'


// connection with db 

mongoose.connect(server)
const con = mongoose.connection;
try{
  con.on('open',() => {
      console.log('connected');
  })
}catch(error)
{
  console.log("Error: "+error);
}


// 
