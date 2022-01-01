import React from 'react';
import { Search } from '../features/Search/Search';
import { Posts } from '../features/Posts/Posts';
import './App.css';
import { Subreddits } from '../features/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <Search />
      <Posts />
      <Subreddits />
    </div>
  );
}

export default App;
