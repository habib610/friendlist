import React from 'react';
import './Added.css';
const Added = (props) => {
    const {name, photo, username} = props.added;

    return (
        <div className="mini-conatainer">
            <img src={photo} alt="" className="mini-img"/>
            <div>

            <p><strong> {name}</strong></p>
            <p>@ {username}</p>
            </div>
   
    <div>
            <button className="mini-btn">Added</button>
    </div>
        </div>
    );
};

export default Added;