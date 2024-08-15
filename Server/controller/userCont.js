const sign = require("../model/signModel");
const jwt = require('jsonwebtoken');

const signAdmin = async (req, res) => {
    const user = req.body;
    const newUser = sign(user);
    try {

        // generate token
        const token = jwt.sign({adminId: newUser._id},
            "aaabbb",
            {
                expiresIn : '1h',
            }
        )

        newUser.token = token;
        let signData = await newUser.save();
        res.status(200).json(signData)
    } catch (error) {
        console.log("Error :", error);        
        res.status(402).json({error : message.error})
    }
}


module.exports = {
    signAdmin,
}



// const sign = require("../model/signModel");
// const jwt = require('jsonwebtoken');

// const signAdmin = async (req, res) => {
//     const user = req.body;

//     try {
//         // Create a new user instance
//         const newUser = new sign(user);

//         // Generate token with a 5-minute expiration
//         const token = jwt.sign({ adminId: newUser._id }, "aaabbb", {
//             expiresIn: '5m',
//         });

//         // Add token to the user object
//         newUser.token = token;

//         // Save the user to the database
//         let signData = await newUser.save();
//         res.status(200).json(signData);
//     } catch (error) {
//         console.log("Error:", error);
//         res.status(500).json({ error: "An error occurred while signing up." });
//     }
// }

// module.exports = {
//     signAdmin,
// }