const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    console.log(req.headers);

    const { accesstoken } = req.headers;

    if(!accesstoken) {
        return res.status(401).send(
            { message: 'Token not provided' }
        );
    }

    jwt.verify(accesstoken, "someSecretKey", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
          }

          req.userId = decoded.userId;
          next();
    });
}