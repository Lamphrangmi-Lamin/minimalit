import React from "react";
import "./Header.css";
import redditLogo from "./img/redditLogo.png";
import hamburger from "./img/hamburger.png";
import searchIcon from "./img/searchIcon.png";

function Header() {
    return (
        <div className="header searbar">
            <img className="hamburger-menu" src={hamburger} alt="hamburger menu" />
            <label className="search-container" for="search">
                <img alt="search icon" className="search-icon" src={searchIcon} />
                <input id="search" className="search-input" name="search" type="text" placeholder="search"/>
            </label>
            <img className="logo" src={redditLogo} alt="reddit logo" />
        </div>
    )
}

export default Header;