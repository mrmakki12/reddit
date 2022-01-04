import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../features/Posts/postsSlice';
import searchSlice from '../features/Search/searchSlice';
import subredditSlice from '../features/Subreddits/subredditsSlice';

export const store = configureStore({

  reducer: {

    search: searchSlice,

    subreddit: subredditSlice,

    posts: postsSlice
  },

});
