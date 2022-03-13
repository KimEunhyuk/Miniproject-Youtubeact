import React, { useState }  from 'react'
import './ChannelRow.css'
import { Avatar } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/NotificationsNone';

const ChannelRow = ({image, Channel, subs, noOfVideos, description}) => {
  

  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className='channelRow'>
          <Avatar className='channelRow__logo' alt={Channel} src={image}/>
          <div className='channelRow__text'>
          
              <h3>
                  {Channel} 
              </h3>
              <p>
                  구독자 {subs} · 동영상 {noOfVideos} 
                    <button className="button" onClick={handleToggle}>{isActive ? "구독" : "구독 중" }</button>
                    
                    {!isActive && <CheckCircleOutlineIcon className='icon'/>}
              </p>
              <p>{description}</p>
          </div>
      </div>
    </>
    
  )
}

export default ChannelRow