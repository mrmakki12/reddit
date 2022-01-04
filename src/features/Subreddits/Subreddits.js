import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectSelectedSubreddit, selectSubreddits } from "./subredditsSlice";
import './subreddits.css';

export const Subreddits = () => {

    const subreddits = useSelector(selectSubreddits);

    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    const [subreddit, setSubreddit] = useState('');

    return (
        <section className="subreddits-container">
            <div className="subreddits-header">
                <h1>Subreddits</h1>
            </div>
            {
                subreddits.map(subreddit => {
                    return (
                        <div className="subreddit">
                            <div className="subreddit-image-container">
                                <img src={subreddit.img} />
                            </div>
                            <h3>{subreddit.name}</h3>
                        </div>
                    )
                })
            }
        </section>
    )
}