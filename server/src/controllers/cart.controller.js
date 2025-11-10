const Cart = require('../models/cart.model');

exports.addToCart = async (req, res) => {
    const { userId, items } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (cart) {
            items.forEach(item => {
                const existingItem = cart.items.find(i => i.productId.toString() === item.productId);
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                } else {
                    cart.items.push(item);
                }
            });
            await cart.save();
        } else {
            cart = new Cart({ userId, items });
            await cart.save();
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error adding to cart', error });
    }
};

exports.getCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving cart', error });
    }
};

exports.clearCart = async (req, res) => {
    const { userId } = req.params;

    try {
        await Cart.deleteOne({ userId });
        res.status(200).json({ message: 'Cart cleared' });
    } catch (error) {
        res.status(500).json({ message: 'Error clearing cart', error });
    }
};