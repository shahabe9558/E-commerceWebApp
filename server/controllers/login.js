const Admin = require('../models/Admin');

exports.login = async (req, res) => {
    // fetch the data 
    const {email, password} = req.body;
    const user = await Admin.findOne({email});
    const userPass = await Admin.findOne({password});

    console.log("user is", user);
    if(!user){
        res.status(401).json(
            {
                success : false,
                message : "User is not register",
            }
        )
    } 
    else if(!userPass){
        res.status(402).json(
            {
                success : false,
                message :"Password is incorrect",
            }
        )
    }
    else {
       return res.status(200).json(
            {
                success : true,
                message : "User Log in successfully"
            }
        )
    }

}