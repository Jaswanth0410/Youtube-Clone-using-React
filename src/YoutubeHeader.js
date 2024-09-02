import React from 'react';
import { FaYoutube, FaSearch, FaBell } from 'react-icons/fa';
import profile from './profile.png'
import './YoutubeHeader.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <FaYoutube className="header__logo" />
        <h2>YouTube</h2>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <FaSearch className="header__searchButton" />
      </div>
      <div className="header__right">
        <FaBell className="header__icon" />
        <img
          src={ profile }
          alt="Profile"
          className="header__avatar"
        />
      </div>
    </div>
  );
}

export default Header;
