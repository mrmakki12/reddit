import React from 'react';
import { Header } from '../features/Header/Header';
import { Posts } from '../features/Posts/Posts';
import './App.css';
import { Subreddits } from '../features/Subreddits/Subreddits';

function App() {
  return (
    <div className="App">
      <Header />
      <Posts />
      <Subreddits />
    </div>
  );
}

export default App;
