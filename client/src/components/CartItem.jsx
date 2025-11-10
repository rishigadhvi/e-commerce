import React from 'react';

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cart-item">
            <img src={item.imageUrl} alt={item.name} />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => onRemove(item.productId)}>Remove</button>
            </div>
        </div>
    );
};

export default CartItem;