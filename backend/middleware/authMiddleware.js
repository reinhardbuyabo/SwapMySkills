const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Adjust the path as necessary

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]; // get the 2nd string from the array
            console.log(token);

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decoded); // { id: 12, iat: 1718221335, exp: 1720813335 }

            // Find the user by ID using Sequelize
            const user = await User.findByPk(decoded.id);

            if (user) {
                req.user = user;
                next();
            } else {
                res.status(401);
                next(new Error("Token might not be valid"));
            }
        } catch (err) {
            console.log(err);
            res.status(401);
            next(new Error(`Not Authorized: ${err.message}`));
        }
    } else {
        res.status(401);
        next(new Error("Not Authorized, no token"));
    }
};

module.exports = { protect };