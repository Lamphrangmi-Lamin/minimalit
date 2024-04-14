import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    loading: false,
    error: null,
}

export const fetchPosts = createAsyncThunk(
    "reddit/fetchPosts",
    async (subreddit) => {
        try {
            const response = await axios.request(`https://www.reddit.com/r/${subreddit}.json`);
            // console.log(response.data.data.children[0].permalink);
            const posts = response.data.data.children.map((child) => (child.data)); // Return only the posts array
            const nonVideoPosts = posts.filter((post) => !post.is_video);
            return nonVideoPosts;
        } catch (error) {
            throw new Error('Failed to fetch posts');
        }
    }
)

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
                console.log(state.posts)
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default redditSlice.reducer;