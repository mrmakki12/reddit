import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectPosts, getPosts } from "./postsSlice";
import { selectSearchTerm } from "../Search/searchSlice";
import { selectSelectedSubreddit } from "../Subreddits/subredditsSlice";
import './posts.css';

export const Posts = () => {

    const dispatch = useDispatch();

    const posts = useSelector(selectPosts);

    const subreddit = useSelector(selectSelectedSubreddit);

    const searchTerm = useSelector(selectSearchTerm);

    useEffect(() => {
        dispatch(getPosts(subreddit));
    }, [subreddit, dispatch]);

    if(posts.length === 0) {
        return (
            <section className="posts-container">
                <h1>Loading...</h1>
            </section>
        )
    }

    return (
        <section className="posts-container">
            {
                posts.map(post => {
                    return (
                        <div className="post" key={post.data.id}>
                            <div>{post.data.ups}</div>
                            <div className="content">
                                <div className="title">{post.data.title}</div>
                                <div className="info">
                                    <p className="name">{post.data.author}</p>
                                    <p>Time</p>
                                    <p>Comments</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}