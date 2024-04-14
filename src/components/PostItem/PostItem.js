import React from "react";
import "./PostItem.css";

function PostItem(props) {
    return (
        <div className="post-item">
            <h2 className="post-heading">{props.title}</h2>
            <img className="post-img" src={props.url} alt={props.alt} />
            <p className="post-author">Posted by {props.author}</p>
        </div>
    )
}

export default PostItem;