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
        const options = {
            method: 'GET',
            url: 'https://reddit34.p.rapidapi.com/getPostsBySubreddit',
            params: {
                subreddit: subreddit,
                sort: 'new'
            },
            headers: {
                'X-RapidAPI-Key': 'a7163f5a77mshab1169c7d840b95p11b4bfjsn8ffddc8359cb',
                'X-RapidAPI-Host': 'reddit34.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data.posts);
            return response.data.posts;
        } catch (error) {
            console.error(error, "Failed to fetch posts");
        }
    }
)

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
})

export default redditSlice.reducer;