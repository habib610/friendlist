import React from 'react';

const Header = () => {
    const style={
        color: "white", 
        textAlign: 'center',
        backgroundColor: 'orangered',
        padding: '10px'
    }
    return (
        <div style={style}>
            <h1>Find Your Friend</h1>
        </div>
    );
};

export default Header;