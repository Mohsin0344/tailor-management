const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const { accessToken, userId } = req.headers;

    if(!accessToken || !userId) {
        return res.status(401).send(
            { message: 'Token not provided' }
        );
    }

    jwt.verify(accessToken, "someSecretKey", (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token' });
          }

          req.userId = decoded.userId;
          next();
    });
}