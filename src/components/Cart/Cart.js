import React from 'react';
import './Cart.css';
const Cart = (props) => {
    return (
        <div>
            <h1>Order Summary</h1>
            <h3><small>Items Ordered:{props.cart.length}</small></h3>
        </div>
    );
};

export default Cart;