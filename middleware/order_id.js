module.exports =  async (req, res, next) => {
    try {
        let orderId = req.params.orderId;
        req.orderId = orderId;
        next();
    } catch (error) {
        res.status(400).send({
            error: error.mesasage
        })
    }
}