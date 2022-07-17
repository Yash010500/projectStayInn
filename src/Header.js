import React from 'react';
import StayInn_logo from './images/stayInn_logo.png';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import {Avatar} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Link} from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
        <Link to={"/"}>
        <img className='header_icon' 
          src={StayInn_logo}
         alt='StayInns'
        />
        </Link>
        <div className='header_center'>
            <input type="text"/>
            <SearchIcon/>
        </div>
        <div className='header_right'>
          <LanguageIcon/>
           <ExpandMoreIcon/>
           <Avatar/>          
        </div>
    </div>
  )
}

export default Header