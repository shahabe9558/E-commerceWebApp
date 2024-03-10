const Admin = require('../models/Admin');
const bcrypt = require("bcrypt");
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken');
require('dotenv').config();



exports.signup = async (req, res) => {
   try {
      // get data 
      const { name, email, password, role } = req.body;

      const exitingUser = await Admin.findOne({ email });

      if (exitingUser) {
         return res.status(400)
            .json({
               success: false,
               message: "User already Exists",
            });
      }

      let hashedPassword;
      try {
         hashedPassword = await bcrypt.hash(password, 10);
      }
      catch (error) {
         return res.status(500)
            .json({
               success: false,
               message: "Error in hashing password",
            });
      }
      // create entry for user if user not found in databe 

      const admin = await Admin.create({
         name, email, password: hashedPassword, role

      })
      return res.status(200)
         .json({
            success: true,
            message: "User created successfully",
         });
   }
   catch (error) {
      console.error(error);
      return res.status(500)
         .json({
            success: false,
            message: "User can not be registered, please try again later",
         });
   }
}


exports.login = async (req, res) => {
   try {
      // fetch email and password
      const { email, password } = req.body;
      // validation on email and pass 
      if (!email || !password) {
         return res.status(400)
            .json({
               success: false,
               message: "Please enter all the details to login",
            });
      }

      // cheking for register user 
      let admin = await Admin.findOne({ email });

      if (!admin) {
         return res.status(401)
            .json({
               success: false,
               message: "User is not register",
            });
      }

      const payload = {
         email: admin.email,
         id: admin._id,
         role: admin.role,
      };
      // verify password and generate a jwt token

      if (await bcrypt.compare(password, admin.password)) {
         // password matched 
         let token = jwt.sign(payload, process.env.JWT_SSECRET,
            {
               expiresIn: "2h",
            });

         admin = admin.toObject();  // user ke andar token laane ke liye


         admin.token = token;

         // console.log(user);

         admin.password = undefined;

         // console.log(user);

         // cookie create arne ke liye 

         const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
         }
         console.log("Yaha se log in call ho raha hai");
         res.cookie("hamarcookie", token, options).status(200).json({
            success: true,
            token,
            admin,
            message: "User logged in successfully"
         });
      }
      else {
         // password do not match 
         return res.status(403)
            .json({
               success: false,
               message: "Password Incorrect",
            })
      }
   }
   catch (error) {
      console.error(error);
      return res.status(500)
         .json({
            success: false,
            message: "User can not login please try again later",
         });
   }
}

exports.order = async (req, res) => {
   const {amount, cart} = req.body;
   let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: 587,
      secure: false,
      auth: {
         user: process.env.MAIL_USER,
         pass: process.env.MAIL_PASS
      }
   });
   let mailOptions = {
      from: 'shahabe9559@gmail.com',
      to: 'alam955941@gmail.com',
      subject: 'Order On Ecomzy',
      text: `Order Reaceive of amount ${amount} 
      for item no. ${cart.length}`
   };
   transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
         console.log('Error occurred:', error);
      } else {
         console.log('Email sent:', info.response);
      }
   });
}

