import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Banner.css';
import Searchdate from './Searchdate';
import {useNavigate} from "react-router-dom"; 

function Banner() {
    const navigate = useNavigate();
    const[showSearch,setShowSearch] = useState(false);
  return (
    <div className='banner'>
    <div className='banner_search'>
         {showSearch&&<Searchdate/>}
        <Button onClick={()=>setShowSearch(!showSearch)}
        className='banner_searchButton'
        variant='outlined'>
        {showSearch?"Hide":"Pick Dates"}
        </Button>
    </div>
      <div className='banner_info'>
        <h1>Travel..Whenever and Wherever, Just StayInn</h1>
        <h5>
            Plan a different kind of travel, A home away from home..
        </h5>
        <Button onClick={()=>navigate('./search')}
         variant='outlined'>
         Explore
        </Button>
      </div>
    </div>
  )
}

export default Banner