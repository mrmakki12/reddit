import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/Posts/postsSlice';
import subredditSlice from '../features/Subreddits/subredditsSlice';

export const store = configureStore({

  reducer: {

    subreddit: subredditSlice,

    posts: postsSlice,

  },

});
