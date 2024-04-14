import React from "react";
import Header from "../Header/Header";
import SubredditList from "../SubredditList/SubredditList";
import PostList from "../PostList/PostList";

function App() {
  return (
    <div className="App">
      <Header />
      <SubredditList />
      <PostList subreddit={"memes"} />
    </div>
  );
}

export default App;
