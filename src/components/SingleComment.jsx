import React from 'react';
import './singleComment.css';

const SingleComment = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img className="profilePic" src={props.picture} alt="profile" />
                <a href="/" className="author">
                    {props.name}
                </a>
            </a>

            <div className="content">
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>

                <div className="text">{props.text}</div>
            </div>

            <button className="bottom">Add Friend</button>
        </div>
    );
};

export default SingleComment;
