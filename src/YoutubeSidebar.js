import React from 'react';
import { FaHome, FaFire, FaBook } from 'react-icons/fa';
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { LiaDownloadSolid } from "react-icons/lia";
import { FaUserCircle } from "react-icons/fa";
import './YoutubeSidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__option">
        <FaHome className="sidebar__icon" />
        <h4>Home</h4>
      </div>
      <div className="sidebar__option">
        <FaFire className="sidebar__icon" />
        <h4>Trending</h4>
      </div>
      <div className="sidebar__option">
        <SiYoutubeshorts className="sidebar__icon" />
        <h4>Shorts</h4>
      </div>
      <div className="sidebar__option">
        <MdSubscriptions className="sidebar__icon" />
        <h4>Subscribed</h4>
        </div>
        <div className="sidebar__option">
        <MdWatchLater  className="sidebar__icon" />
        <h4>Watch Later</h4>
      </div>
      <div className="sidebar__option">
      <AiFillLike className="sidebar__icon" />
      <h4>Liked Videos</h4>
      </div>
      <div className="sidebar__option">
      <LiaDownloadSolid className="sidebar__icon" />
      <h4>Downloads</h4>
      </div>
      <div className="sidebar__option">
        <FaUserCircle className="sidebar__icon" />
        <h4>Profile</h4>
      </div>
    </div>
  );
}

export default Sidebar;
