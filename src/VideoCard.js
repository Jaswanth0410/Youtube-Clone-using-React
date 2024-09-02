import React from 'react';
import './VideoCard.css';
import logo from './sony.jpg'

function VideoCard({ title, views, timestamp, channel, image }) {
  return (
    <div className="videoCard">
      <img src={image} alt="" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <img src={logo} alt="" className="videoCard__avatar" />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} • {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
