import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
  return (
    <div className='sidebar'>       
        <SidebarRow selected Icon={HomeIcon} title="홈" />
        <SidebarRow Icon={WhatshotIcon} title="인기" />
        <SidebarRow Icon={SubscriptionsIcon} title="구독" />
        <hr />
        <SidebarRow Icon={VideoLibraryIcon} title="보관함" />
        <SidebarRow Icon={HistoryIcon} title="시청 기록" />
        <SidebarRow Icon={OndemandVideoIcon} title="내 동영상" />
        <SidebarRow Icon={WatchLaterIcon} title="나중에 볼 동영상" />
        <SidebarRow Icon={ThumbUpOffAltIcon} title="좋아요 표시한 동영상" />
        <SidebarRow Icon={ExpandMoreIcon} title="더보기" />
        <hr />
    </div>
  )
}

export default Sidebar