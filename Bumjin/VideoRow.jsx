import React from 'react'
import './VideoRow.css'
import { Avatar } from '@mui/material'

const VideoRow = ( { views, description, timestamp, channel, title, image } ) => {
  return (
    <div className='videoRow'>
        <img src={image} alt=""/>
        <div className='videoRow__text'>
            <h3>{title}</h3>
            <p className='videoRow__headline'>
                
                조회수 {views} · {timestamp} <br/>
            </p>
            <p className='video__logo'>
                <Avatar src='https://yt3.ggpht.com/SCXvQ4Lh4MTHZ5wZ35A7JLCCC7vT2O08apvQTL2oE_3QeVyBh7ZjNZlAKHqlrtB0Wx67r5dRZrs=s176-c-k-c0x00ffffff-no-rj-mo'/> {channel}
            </p>
            <p className='videoRow__description'>{description}</p>
        </div>
    </div>
  )
}

export default VideoRow