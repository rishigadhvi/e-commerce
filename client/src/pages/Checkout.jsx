import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useHistory } from 'react-router-dom';

const Checkout = () => {
    const { cartItems, totalAmount } = useContext(CartContext);
    const history = useHistory();

    const handleCheckout = () => {
        // Logic for handling checkout (e.g., API call to process payment)
        // After successful checkout, redirect to a confirmation page or home
        history.push('/confirmation');
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <h3>Your Items:</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.productId}>
                                {item.name} - Quantity: {item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
                    <button onClick={handleCheckout}>Proceed to Payment</button>
                </div>
            )}
        </div>
    );
};

export default Checkout;