import React from "react";
import PostItem from "../PostItem/PostItem";
import "./PostList.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../App/features/reddit/redditSlice";

function PostList({subreddit}) {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.reddit.posts);
    const loading = useSelector((state) => state.reddit.loading);
    // const error = useSelector((state) => state.reddit.error);

    
    useEffect(() => {
        dispatch(fetchPosts(subreddit));
    }, [dispatch, subreddit]);
    
    if (loading || !posts || posts.length === 0) {
        return <div><h2>Loading...</h2></div>;
    }
    return (
        <div className="post-list">
            {posts.map((post) => (
                <PostItem
                key={post.id} 
                title={post.title}
                thumbnail={post.thumbnail}
                author={post.author}
                source={post.domain}
                alt={post.post_hint}
                />
            ))}
        </div>
    )
}

export default PostList;