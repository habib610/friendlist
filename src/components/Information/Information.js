import React from 'react';
import './Information.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'





const Information = (props) => {

    const element = <FontAwesomeIcon icon={faUserPlus} />
    const {name, income, phone, photo, username,email} = props.friend;
    return (
        <div className="wrapper">
            <img src={photo} alt=""/>
            <div className="information-container">
            <h3>{name}</h3>
    <p>username: <strong>{username}</strong></p>
    <p>phone: {phone}</p>
    <p>Email: {email}</p>
    <h4>Income: {income}</h4>
            </div>
            <div className="btn">
            <button onClick={()=> props.clickHandle(props.friend)}>{element}   Add Friend</button>
            </div>
        </div>
    );
};

export default Information;