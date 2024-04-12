import React from "react";
import "./PostItem.css";

function PostItem(props) {
    return (
        <div className="post-item">
            <h2 className="post-heading">{props.value}</h2>
            <img className="post-img" src="https://external-preview.redd.it/YTG-5U2jrfwBblZ3kh93awy_zd-5Nb7hK7q4_hJwtd4.jpg?auto=webp&s=46a0deece42ad8462a51635f7e0de5dd9f9aec7a" loading="lazy" alt="post" />
            <a className="post-src" href="google.com">www.google.com</a>
        </div>
    )
}

export default PostItem;