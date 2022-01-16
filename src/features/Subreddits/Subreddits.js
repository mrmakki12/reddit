import { useDispatch, useSelector } from "react-redux";
import { selectSelectedSubreddit, setSubreddit, selectSubreddits } from "./subredditsSlice";
import './subreddits.css';

export const Subreddits = () => {

    const subreddits = useSelector(selectSubreddits);

    const dispatch = useDispatch();

    const selectedSubreddit = useSelector(selectSelectedSubreddit);

    return (
        <section className="subreddits-container">

            <div className="subreddits-header">
                <h1>Subreddits</h1>
            </div>

            {
                subreddits.map(subreddit => {
                    return (
                        
                        <div key={subreddit.url} 
                            className={subreddit.url === selectedSubreddit ? 'selected subreddit' : 'subreddit'} 
                            onClick={() => dispatch(setSubreddit(subreddit.url.toString()))}>

                            <div className="subreddit-image-container">
                                <img src={subreddit.img} alt={subreddit.name + ' icon'}/>
                            </div>

                            <h3>{subreddit.name}</h3>
                        </div>
                    )
                })
            }
        </section>
    )
}