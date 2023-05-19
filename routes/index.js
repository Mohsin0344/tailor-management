var express = require('express');
var router = express.Router();
var userRouter = require('./user_info');

router.use('/users', userRouter);



module.exports = router;