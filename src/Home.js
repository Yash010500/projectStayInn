
import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card' ;
import img1 from './images/hotel1.jpg';
import img2 from './images/hotel2.jpg';
import img3 from './images/hotel3.jpg';
import img4 from './images/hotel4.jpg';
import img5 from './images/hotel5.jpg';
import img6 from './images/hotel6.jpg';
import img7 from './images/hotel7.jpg';
import img8 from './images/hotel8.jpg';
import img9 from './images/hotel9.jpg';

function Home() {
  return (
    <div className='home'>
      <Banner/>
      <div className='home_section'>
        <Card src={img1} title="Puducherry, India" description={"Comfortable Private Place, with Rooms for friends and Family"} price="₹ 3,500/night" />
        <Card src={img2} title="Pattaya City, Thailand" description={"Enjoy the amazing sites of Thailand and its hospitality"} price="₹ 6,500/night" />
        <Card src={img3} title="Anjuna,Goa, India" description={"A perfect Home stay for family vacation, with good connectivity from city center and beaches"} price="₹ 4,000/night" />
      </div>
      <div className='home_section'>
        <Card src={img4} title="Jibhi, India" description={"A Peaceful Stay, amongsts the valley"} price="₹ 3,000/night" />
        <Card src={img5} title="Jaunpur Range, India" description={"Comfortable stay with a sceneric view."} price="₹ 3,500/night" />
        <Card src={img6} title="Lijiang, China" description={"Kezhans Style Home, for a Wholesome Traditional Chinese Experience."} price="₹ 9,000/night" />
      </div>
      <div className='home_section'>
        <Card src={img7} title="Joshua Tree, California,US" description={"An Amazing Desert Night Sky View"} price="₹ 23,000/night"/>
        <Card src={img8} title="Fes,Morocco" description={"A Traditional Moroccan Stay"} price="₹15,000/night"/>
        <Card src={img9} title="Nagano, Japan" description={"A Traditional Japanese Home Stay"} price="₹10,000/night"/>
      </div>
    </div>
  )
}

export default Home