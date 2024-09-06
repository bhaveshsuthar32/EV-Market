const signSchema = require("../model/signModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../utils/nodemailer');

const JWT_SECRET = process.env.JWT_SECRET;

const signAdmin = async (req, res) => {
    const user = req.body;
    try {
        const existingUser = await signSchema.findOne({ email: user.email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" }); // Return 409 Conflict
        }

        const hashPassword = await bcrypt.hash(user.password, 10);
        const newUser = new signSchema({
            ...user,
            password: hashPassword,
        });
        const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
            expiresIn: "1h",
        });
        newUser.token = token;
        await newUser.save();

        // Send welcome email using Nodemailer
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: newUser.email,
            subject: 'Welcome to EV-Market',
            text: 'Congratulations, you have successfully signed up for the EV-Market'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" }); // Return 500 for server errors
    }
};



   const loginAdmin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await signSchema.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid password" });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id, username: user.username, email : user.email }, JWT_SECRET, {
        expiresIn: "30M",
      });
      user.token = token;
      await user.save();
      // console.log("login successfully");
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };              
  
  const getAdmin = async (req, res) => {

    try {
      let userData = await signSchema.find();
  
      if (userData.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.status(200).json(userData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  module.exports = {
    signAdmin,
    loginAdmin,
    getAdmin,
  }