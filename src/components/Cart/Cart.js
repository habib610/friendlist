import React from 'react';
import Added from '../Friend/Added/Added';

const Cart = (props) => {

    const cart = props.cart;
 
    const total = cart.reduce((total, earning)=> total + earning.income, 0);
 
    return (
        <div>
            <h3>Friend Information</h3>
        <h4>Added freind: {cart.length}</h4>
        <h4>Total Income: {total}</h4>
        {
            cart.map(ad=><Added added={ad}></Added>)
        }
        </div>
    );
};

export default Cart;