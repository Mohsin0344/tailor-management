const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = async (req, res, next) => {
    console.log(req.headers);
    const { userId } = req.params
    const  accesstoken  = req.headers['authorization'];

    if(!accesstoken) {
        return res.status(401).send(
            { message: 'Token not provided' }
        );
    }

    const decoded = jwt.verify(accesstoken, "someSecretKey");

    const user  = await User.findByPk(userId);

    if(!user) {
        return res.status(404).send(
            {
                message: "user does not exists"
            }
        );
    }

    if(user.id !== decoded.user.id) {
        return res.status(403).json({ message: 'Invalid token' });
    }

    req.userId = userId;
    next();
}