import { Button } from '@mui/material';
import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';
import img1 from './images/search1.jpg';
import img2 from './images/search2.jpg';
import img3 from './images/search3.jpg';
import img4 from './images/search4.jpg';
import img5 from './images/search5.jpg';
import img6 from './images/search6.jpg';
import img7 from './images/search7.jpg';
import img8 from './images/search8.jpg';
import img9 from './images/search9.jpg';
import img10 from './images/search10.jpg';
import img11 from './images/search11.jpg';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage_info'>
            <h1>Stays nearby</h1>
            <Button variant='outline'>Cancellation Flexibility</Button>
            <Button variant='outline'>Location</Button>
            <Button variant='outline'>Price</Button>
            <Button variant='outline'>Room availability</Button>
            <Button variant='outline'>More filters</Button>
        </div>
        <SearchResult img={img1} location="Maafushi,Maldives" title="Chao Guesthouse" description={"This is a fully equipped guest room. Breakfast and room service is included in the price. It comes with private bathroom and toilet, queen size bed, working space, AC, free fast WiFi, cable TV, hot water shower, hairdryer, electric kettle, iron, fridge, wardrobe and free toiletries. "} star="4.5" price={"₹3,068/night"}/>
        <SearchResult img={img2} location="Pak Chong,Thailand" title={"Camp Cabin Chic A"} description={"Camp Cabin Chic style house located 478 meters above mean sea level in one of the most scenic and peaceful destination, PakChong.Relax your soul and stay with us on your vacation"} star="4.33" price={"₹9,138/night"}/>
        <SearchResult img={img3} location="Pelkosenniemi,Finland" title={"Snow igloo"} description={"Snow igloo with real beds inside. Nice atmosphere with led lights and white walls. Outside the igloo is possibility to see northern lights if you are lucky."} star="4.81" price={"₹11,286/night"}/>
        <SearchResult img={img4} location="Dharamshala,India" title={"Woodscation-Life Away From Life"} description={"Sleeping under the stars, waking up to the sounds of nature and life changing conversations."} star="4.51" price={"₹990/night"}/>
        <SearchResult img={img5} location="Bangkok,Thailand" title={"Quiet&Natural Thai style poolside villa Onnut"} description={"This poolside villa is nestled in the corner of a classic Thai compound house with a clean and quiet atmosphere surrounded by a lush tropical garden."} star="4.84" price={"₹4,940/night"}/>
        <SearchResult img={img6} location="Tangalle,Sri Lanka" title={"The Box House"} description={"Nestled amidst a grove of towering Satinwood Trees, this modern villa is made up of Five re-purposed shipping containers.All rooms are equipped with en-suite bathrooms and 5 star hotel grade Bed & Bath amenities."} star="4.79" price={"₹19,921/night"}/>
        <SearchResult img={img7} location="Kemijarvi,Finland" title={"Pyhätunturi Duck Castle Villa"} description={"The unique villa features 4 bedrooms + loft, a flat-screen TV, an fully equipped kitchen with a dishwasher and a microwave, a washing machine, and 2 bathrooms with a hot tub."} star="4.88" price={"₹14,469/night"}/>
        <SearchResult img={img8} location="Goreme,Turkey" title={"Family Cave Rooms at Saksagan BnB"} description={"Large cave carved rooms for group of friends traveling together. Each has its own private bathroom and patio."} star="4.67" price={"₹2,411/night"}/>
        <SearchResult img={img9} location="Munnar.Kerala,India" title={"Adobe 2 by The Mudhouse Marayoor"} description={"Perched atop a quaint hill, The Mudhouse is surrounded by the spectacular landscapes of Sahayadri, offering an epic panorama of the valley of Marayoor."} star="4.81" price={"₹7,719/night"}/>
        <SearchResult img={img10} location="Naggar,Himachal Pradesh,India" title={"Naggarville (Entire Villa)"} description={"We are about 100 mtrs from the NAGGAR CASTLE, right behind the post office, in a quaint little village. It's a rustic village setting with all modern day comforts, along with unlimited cups of herbal tea/ coffee & thousands of stories to share!!"} star="4.75" price={"₹12,000/night"}/>
        <SearchResult img={img11} location="New York,United States" title={"Huge Designer Townhome |Private Backyard|"} description={"4 floors of exquisite charm and beauty with 5 bedrooms and 4 and a half bathrooms. Absolutely fantastic Harlem Townhome."} star="4.85" price={"₹67,730/night"}/>
    </div>
  )
}

export default SearchPage