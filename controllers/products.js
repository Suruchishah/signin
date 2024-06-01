const Product=require("../models/signnn");
const getAllProducts = async(req,res) => {
    const { name, password } = req.query;

    // Check if username and password are provided
    if (!name || !password) {
        return res.status(400).json({ message: "Username and password are required." });
    }

    // Check if the user exists in the database
    /*User.findOne({ name, password }, (err, user) => {
        if (err) {
         return res.status(500).json({ message: "Internal server error." });
        }
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password." });
        }
        // If user is found, return success message
        return res.status(200).json({ message: "Sign-in successful." });
    });*/
};
module.exports = {getAllProducts};