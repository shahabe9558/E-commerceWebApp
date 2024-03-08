const mongoose = require('mongoose');
require('dotenv').config();

const connectWithDb = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log("connected with db successfully");
    })
    .catch((error)=>{
        console.log("Error while connnectin to db");
        console.log(error.message);
        process.exit(1);
    })
}
module.exports = connectWithDb;