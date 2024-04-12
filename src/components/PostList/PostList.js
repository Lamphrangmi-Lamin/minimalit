import React from "react";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";

function PostList() {
    return (
        <div className="post-list">
            {/* Render PostItem here */}
            <PostItem value="Post here" />
            <PostItem value="Post here also" />
            <PostItem value="Post here also" />
            <PostItem value="Post here also" />
        </div>
    )
}

export default PostList;