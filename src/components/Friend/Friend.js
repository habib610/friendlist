import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import Information from '../Information/Information';
import './Friend.css'
import Cart from '../Cart/Cart';
const Friend = () => {
    const friendData = fakeData;
 
    const [friend, setFriend] = useState(friendData);

// click handler 
const [cart, setCart] = useState([])

const clickHandle=(event)=>{
    console.log("cliked",event);
    const newCart = [...cart, event];
    setCart(newCart);
}


    return (
        <div>
        <h2>Total Friends: {friend.length} </h2>
        <div className="main-container">
        <div className="friend">
                {
                    friend.map(frnd => <Information friend={frnd} clickHandle={clickHandle}></Information>)
                }
        </div>
        <div className="cart">
            <Cart cart={cart}></Cart>
        </div>
        </div>
        
        </div>
    );
};

export default Friend;