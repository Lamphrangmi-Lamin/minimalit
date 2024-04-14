import React from "react";
import Header from "../Header/Header";
import SubredditList from "../SubredditList/SubredditList";
import PostList from "../PostList/PostList";
import "./App.css";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false)
  const toggleActive = () => {
    setIsActive(!isActive);
  }

  return (
    <div className="App">
      <Header toggleActive={toggleActive} />
      {isActive && <SubredditList className="subreddit-list" />}
      <PostList subreddit={"memes"} />
    </div>
  );
}

export default App;
