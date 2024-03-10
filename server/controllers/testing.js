const Admin = require('../models/Admin');

exports.testingSign = async (req, res) =>{
    try{
       const {email, password} = req.body;
       const response = await Admin.create({email, password});
       res.status(200).json(
          {
             success : true,
             data : response,
             message : "Created successfully",
          }
       )
    }
    catch(error){
       console.log("Catch block chala hai");
       console.error(error);
    }
 }