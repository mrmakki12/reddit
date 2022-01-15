import React from "react";
import './header.css';

export const Header = () => {

    return (
        <nav className="nav">

            <div className="nav-logo">
                <img src='/images/redditLogo.png' alt="reddit logo"/>
                <p><span>Reddit</span>Minimal</p>
            </div>

        </nav>
    )
}