import React, { useState } from 'react';
import './Header.css';
//import MenuIcon from '@mui/icons-material/Menu';
import MenuIcon from '@mui/icons-material/MenuSharp';
import SearchIcon from '@mui/icons-material/Search';
//import VideoCallIcon from '@mui/icons-material/VideoCall';
import VideoCallIcon from '@mui/icons-material/VideoCallOutlined';
import AppsIcon from '@mui/icons-material/Apps';
//import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsIcon from '@mui/icons-material/NotificationsNone';
//import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material'

const Header = () => {
  const [inputSearch, setInputSearch] = useState("");


  /*const onKeyPress = (e) => {
      if(e.key === 'Enter') {

      }
  }*/
  const onKeyPress = (e) => {
      if(e.keyCode == 13) {
        console.log('enter');
      }
  }

  return (
    <div className='header'>
        <div className='header__left'>    
            <MenuIcon />
            <Link to="/">
                <img 
                    className='header__logo'
                    //src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                    alt="Youtube 홈"
                />
            </Link>
        </div>
        <div className='header__input'>
            <input 
                onChange={e => setInputSearch(e.target.value)} 
                value={inputSearch} 
                onKeyPress={onKeyPress}
                placeholder='검색'
                type="text"
            />
            <Link to={`/search/${inputSearch}`}>
                <SearchIcon className='header__inputButton' />
            </Link>
            
        </div>
        
        <div className='header__icons'>
            <VideoCallIcon className='header__icon'/>
            <AppsIcon className='header__icon'/>
            <NotificationsIcon className='header__icon'/>
            <Avatar className='header__icon' src="https://user-images.githubusercontent.com/71051838/158067672-e3f4463b-6dca-4a10-bb4f-63f71daea146.jpg"/>

        </div>
    </div>
  )
}

export default Header