import React from "react";
import { useSelector } from 'react-redux';
import { selectPosts } from "./postsSlice";
import { selectSearchTerm } from "../Search/searchSlice";
import { selectSelectedSubreddit } from "../Subreddits/subredditsSlice";
import './posts.css';

export const Posts = () => {

    const posts = useSelector(selectPosts);

    const subreddit = useSelector(selectSelectedSubreddit);

    const searchTerm = useSelector(selectSearchTerm);

    if(posts.length === 0) {
        return (
            <section className="posts-container">
                <h1>Loading...</h1>
            </section>
        )
    }

    return (
        <section className="posts-container">
        </section>
    )
}