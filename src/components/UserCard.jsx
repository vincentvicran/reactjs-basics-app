import React from 'react';
import './userCard.css';

const UserCard = (props) => {
    return (
        <div className="userCard">
            <div className="userContent">
                <div className="header">Vikrant Shrestha</div>
                <div className="description">{props.children}</div>
            </div>
        </div>
    );
};

export default UserCard;
