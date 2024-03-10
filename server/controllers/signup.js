const Admin = require("../models/Admin");

exports.signup = async (req, res)=>{
    try{
        // fetch the data from body  
        const {firstName, lastName, email, password, role} = req.body;
        const response = await Admin.create({firstName, lastName, email, password, role});
        console.log(response);
        res.status(200).json(
            {
                success : true,
                message : "Entry created successfully",
                data : response
            }
        )
    }
    catch(error){
        console.log("Error while fetching", error);
    }
}