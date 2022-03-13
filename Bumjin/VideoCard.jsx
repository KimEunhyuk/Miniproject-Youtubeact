import React from 'react'
import { Avatar } from '@mui/material'
import './VideoCard.css';

const VideoCard = ( { image, title, channel, views, timestamp , channelImage } ) => {
  return (
    <div className='videoCard'>
        <img className='videoCard__thumbnail' src={image} alt=""/>
        <div className='videoCard__info'>
            <Avatar 
                className="videoCard__avatar"
                alt={channel}
                src={channelImage}
            />
            <div className='videoCard__text'>
                <span className="title">{title}</span>
                <p>{channel}</p>
                <p>
                    조회수{views} · {timestamp}
                </p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard