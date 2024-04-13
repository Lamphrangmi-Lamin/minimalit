import React from "react";
import "./PostItem.css";

function PostItem(props) {
    return (
        <div className="post-item">
            <h2 className="post-heading">{props.title}</h2>
            <img className="post-img" src={props.thumbnail} alt={props.alt} />
            <a className="post-src" href={props.source}>{props.source}</a>
            <p className="post-author">{props.author}</p>
        </div>
    )
}

export default PostItem;