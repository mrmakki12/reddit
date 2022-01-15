import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (url) => {

        const response = await fetch(`https://www.reddit.com${url}.json`,{
            mode: 'cors'
        });

        const json = await response.json();

        const posts = json.data.children;
        console.log(posts)
        return posts;
    }
)

const postsSlice = createSlice({
    
    name: 'posts',

    initialState: {

        posts: [],

        isLoadingPosts: false,

        failedLoadingPosts: false,

    },

    reducers: {

        setPosts: (state, action) => {
            state.posts = action.payload;
        }

    },

    extraReducers: {

        [getPosts.pending]: (state) => {
            state.isLoadingPosts = true;
            state.failedLoadingPosts = false;
        },

        [getPosts.fulfilled]: (state, action) => {
            state.isLoadingPosts = false;
            state.failedLoadingPosts = false;
            state.posts = action.payload;
        },

        [getPosts.rejected]: (state) => {
            state.isLoadingPosts = false;
            state.failedLoadingPosts = true;
        },

    }


})

export default postsSlice.reducer;

export const { setPosts } = postsSlice.actions;

export const selectPosts = (state) => state.posts.posts;