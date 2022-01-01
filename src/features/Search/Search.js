import React, { useState } from "react";
import './search.css';

export const Search = () => {
    
    const [search, setSearch] = useState('');

    return (
        <nav className="nav">
            <div className="nav-logo">
                <img src='/images/redditLogo.png' alt="reddit logo"/>
                <p><span>Reddit</span>Minimal</p>
            </div>
            <form>
                <input type='text'
                    placeholder="Search" 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="nav-search-btn">
                    <img src='/images/search-tool.png' alt='search' />
                </div>
            </form>
        </nav>
    )
}