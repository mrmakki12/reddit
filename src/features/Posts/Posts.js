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
    }, [subreddit, dispatch, searchTerm]);

    if(posts.length === 0 || !posts) {
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
                            <div className="ups"><h3>{post.data.ups > 999 ? (post.data.ups / 1000).toFixed(1) + 'k' : post.data.ups }</h3></div>
                            <div className="content">
                                <div className="title"><h3>{post.data.title}</h3></div>
                                <div className={post.data.secure_media === null || undefined ? 'hide-me': 'video'}><video controls width="auto"> <source src={post.data.secure_media?.reddit_video?.fallback_url}/></video></div>
                                <div className={post.data.url_overridden_by_dest === null || undefined ? 'hide-me': 'pics'}><img className='image'src={post.data.url_overridden_by_dest} /></div>
                                <div className="self-text"><p>{post.data.selftext}</p></div>
                                <div className="info">
                                    <p className="name">{post.data.author}</p>
                                    <p>Time</p>
                                    <div className="comment-icon">
                                        <img src='/images/comment.png' />
                                        <p>{post.data.num_comments > 999 ? (post.data.num_comments / 1000).toFixed(1) + 'k' : post.data.num_comments}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}