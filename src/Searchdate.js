import React, { useState } from 'react';
import './Searchdate.css';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from 'react-date-range';
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Searchdate() {
  const navigate = useNavigate();
  const[startDate,setStartDate]=useState(new Date());
  const[endDate,setEndDate]=useState(new Date());
  const selectionRange = {
     startDate:startDate,
     endDate: endDate,
     key: "selection",
  };

  function handleSelect(range){
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  }
  return (
    <div className='search'>
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
        <h2>Number of Guests <SentimentVerySatisfied /></h2>
        <input min={0} defaultValue={2} type="number"/>
        <Button onClick={()=>navigate('/search')}>Search Stay</Button>
    </div>
  )
}

export default Searchdate