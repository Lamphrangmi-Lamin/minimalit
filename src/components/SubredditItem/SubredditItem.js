import React from "react";
import "./SubredditItem.css";
import { useDispatch } from "react-redux";
import { fetchPosts } from "../App/features/reddit/redditSlice";

function SubredditItem({ name, src }) {
    const dispatch = useDispatch();
    const handleSubredditClick = (subreddit) => {
        dispatch(fetchPosts(subreddit));
    }

    return (
        <div className="subreddit-item" onClick={() => handleSubredditClick(name)}>
            <img className="subreddit-icon" src={src} alt={`${name} icon`} />
            <p className="subreddit-name">{name}</p>
        </div>
    )
}

export default SubredditItem;