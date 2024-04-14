import React from "react";
import "./SubredditList.css";
import SubredditItem from "../SubredditItem/SubredditItem";
import memesIcon from "./img/alone.svg";
import natureIcon from "./img/nature.svg";

function SubredditList() {
    const subredditIcons = {
        memes: memesIcon,
        nature: natureIcon,
    }
    return (
        <div className="subreddit-list">
            <h2 className="heading">COMMUNITIES</h2>
            <SubredditItem name="Nature" src={subredditIcons.nature} 
            className="subreddit-item" />
            <SubredditItem name="Memes" src={subredditIcons.memes} className="subreddit-item" />
        </div>
    )
}

export default SubredditList;