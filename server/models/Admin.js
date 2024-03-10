// const mongoose = require('mongoose');

// const adminSchema = new mongoose({
//        firstName:{
//         type:String,
//         required:true,
//         trim:true,
//        },
//        lastName:{
//         type:String,
//         required:true,
//         trim:true,
//        },
//        email:{
//         type:String,
//         required:true,
//         trim:true,
//        },
//        password:{
//         type:String,
//         required:true,
//        },
//        role:{
//         type:String,
//         enum:["buyer", "vendor"]
//        }
// });
// module.exports = mongoose.model('Admin', adminSchema);



// ye testing ke liye   


//import mongoose 
const mongoose = require('mongoose');
const { stringify } = require('querystring');

// define handler 

const userSchema = new mongoose.Schema(
   {
      firstName:{
      type:String,
      required:true,
      trim:true,
      },
      lastName:{
      type:String,
      required:true,
      trim:true,
      },
      email:{
      type:String,
      required:true,
      trim:true,
      },
      password:{
      type:String,
      required:true,
      },
   }
);

//module excports 

module.exports = mongoose.model('Admin', userSchema);