const { where } = require('sequelize');
const Orders = require('../models/orders');
const SizeType = require('../models/size_type')
const Size = require('../models/sizes')

module.exports = {
    
    placeOrder: async ( req, res, next ) => {

        try {

            const userId = req.userId;
            const { delivery_date, fk_size_id } = req.body;

            if(!delivery_date || !fk_size_id) {
                return res.send(
                    {
                        "message": "Some data is missing"
                    }
                );
            }

            const order = await Order.create(
                {
                    delivery_date,
                    fk_size_id,
                    fk_user_id: userId
                }
            );

            res.send(
                {
                    "message": "Order created successfully",
                    "data": {
                        "orderDetails": order
                    }
                }
            );
            
        } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
        }
    },

    details: async ( req, res, next ) => {
        try {
            const orderId = req.orderId;
            const userId = req.userId;
            if(!orderId || !userId) {
                return res.status(400).send(
                    {
                        "message": "some data is missing"
                    }
                );
            }

            const order = await Orders.findOne(
                {
                    where: {
                        id: orderId
                    }
                }
            );

            const size_type = await SizeType.findOne(
                {
                    where: {
                        id: order.fk_size_id
                    }
                }
            )

            const size = await Size.findOne(
                {
                    where: {
                        fk_user_id: userId
                    }
                }
            )

            res.send(
                {
                    "message": "Order details received",
                    "data": {
                        "orderDetails": order,
                        "sizeDetails": {
                            "sizetype": size_type,
                            "size": size
                        }
                    }
                }
            );
        } catch(e) {
            res.status(400).send({
                "message": e.message,
            });
        }
    },

    deliver: async ( req, res, next ) => {

        try {

            const orderId = req.orderId;
            const userId = req.userId;

            if(!orderId || !userId) {

                return res.status(400).send(
                    {
                        "message": "order id or user id is required to deliver the order"
                    }
                )
            }

            const order = await Orders.findOne(
                {
                    where: {
                        fk_user_id: userId
                    }
                }
            );

            if(!order) {

                return res.status(404).send(
                    {
                        "message": "Order not found"
                    }
                )
            }

            order.is_delivered = true;

            await order.save();

            res.send(
                {
                    "message": "order has been delivered",
                    "data": {
                        "orderDetails": order
                    }
                }
            );

        } catch(e) {
            res.status(500).send({
                "message": e.message,
            });
        }
    }
}