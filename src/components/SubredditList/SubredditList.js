import React from "react";
import "./SubredditList.css";
import SubredditItem from "../SubredditItem/SubredditItem";

function SubredditList() {
    return (
        <div className="subreddit-list">
            <h2 className="heading">COMMUNITIES</h2>
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
            <SubredditItem className="subreddit-item" />
        </div>
    )
}

export default SubredditList;