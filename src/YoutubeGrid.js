import React from 'react';
import leo from './leo.webp';
import whistle from './whsitle.jpg';
import kutty from './kutty.webp';
import vaathi from './vaathi.webp';
import two from './two.webp';
import VideoCard from './VideoCard.js';
import './VideoGrid.css';

function VideoGrid() {
  return (
    <div className="videoGrid">
      <VideoCard
        title="Naan Ready|Thalapathy Vijay|LEO"
        views="300M views"
        timestamp="1 year ago"
        channel="Sony Music South"
        image = {leo}
      />
      <VideoCard
        title="Kutty Story|Thalapathy Vijay|Master"
        views="135M views"
        timestamp="2 year ago"
        channel="Sony Music South"
        image = {kutty}
      />
      <VideoCard
        title="Two Two Two|K2K"
        views="100M views"
        timestamp="2 years ago"
        channel="Sony Music South"
        image = {two}
      />
      <VideoCard
        title="Vaathi Coming|Thalapthy Vijay|Master"
        views="1B views"
        timestamp="3 years ago"
        channel="Sony Music South"
        image = {vaathi}
      />
      <VideoCard
        title="React JS Crash Course"
        views="100M views"
        timestamp="1 year ago"
        channel="Think Music"
        image = {whistle}
      />
      <VideoCard
        title="Whistle Podu|Thalapathy"
        views="125M views"
        timestamp="2 months ago"
        channel="T-Series"
        image = {leo}
      />
      
    </div>
  );
}

export default VideoGrid;
