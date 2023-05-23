module.exports =  async (req, res, next) => {
        try {
            let userId = req.params.userId;
            req.userId = userId
            next();
        } catch (error) {
            res.status(400).send({
                error: error.mesasage
            })
        }
    }