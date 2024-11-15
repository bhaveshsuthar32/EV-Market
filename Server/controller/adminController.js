const adminSchema = require("../model/adminModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const transporter = require('../utils/nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ;

const signAdmin = async (req, res) => {
    const user = req.body;
    try {
        const existingUser = await adminSchema.findOne({ email: user.email });
        if (existingUser) {
            return res.status(409).json({ error: "Email already exists" }); 
        }

        const hashPassword = await bcrypt.hash(user.password, 10);
        const newUser = new adminSchema({
            ...user,
            password: hashPassword,
        });
        const refreshToken = jwt.sign({ userId: user._id, username: user.username, email: user.email}, JWT_REFRESH_SECRET, { expiresIn: "8d"});

        newUser.refreshToken = refreshToken;
        await newUser.save();

        // Send welcome email using Nodemailer
        let mess = `
              <div>
                  <h3>Welcome to EV-Market, ${newUser.username}</h3>
                  <p>Congratulations, you have successfully signed up for EV-Market.</p>
                  <p>At EV-Market, we believe in a sustainable future, and we are here to help you navigate the exciting world of electric vehicles.</p>
              </div>
          ` ;
        
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: newUser.email,
          subject: 'Welcome to EV-Market',
          html: mess
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
      const user = await adminSchema.findOne({ email });
      if (!user) {
          return res.status(404).json({ error: "User not found" });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
          return res.status(401).json({ error: "Invalid password" });
      }

      // Generate JWT token
      const accessToken = jwt.sign({ userId: user._id, username: user.username, email: user.email }, JWT_SECRET, {
          expiresIn: "5M",
      });

      const refreshToken = jwt.sign({ userId: user._id, username: user.username, email: user.email}, JWT_REFRESH_SECRET, { expiresIn: "8d"})

      user.refreshToken = refreshToken;
      await user.save();

      // Send back the token and isAdmin status
      res.status(200).json({ accessToken, refreshToken, isAdmin: user.isAdmin });
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