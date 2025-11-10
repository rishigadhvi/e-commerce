import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
    const { cartItems, fetchCart, clearCart } = useContext(CartContext);

    useEffect(() => {
        fetchCart();
    }, [fetchCart]);

    const handleClearCart = () => {
        clearCart();
    };

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <CartItem key={item.productId} item={item} />
                        ))}
                    </ul>
                    <button onClick={handleClearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default Cart;