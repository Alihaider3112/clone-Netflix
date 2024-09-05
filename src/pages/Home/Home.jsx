import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCard from '../../components/TitleCard/TitleCard'
import Footer from '../../components/Footer/Footer'

import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'



function Home() {
  return (
    <div className='home'>
      <Navbar/> 
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-img'/>
        <div class="hero-caption">
          <img src={hero_title} alt="" className="caption-img"/>
          <p>Discovering his ties to a secret ancient order, a young man living in modern istanbul embarks on a quest to  save the city from an immortal enemy.</p>
          <div class="hero-btns">
            <button className="btn"><img src={play_icon} alt=""/>Play</button>
            <button className="btn dark-btn"><img src={info_icon} alt=""/>More Info</button>
          </div>
        </div>
      </div>
      <div class="more-cards">
      <TitleCard/>
      <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
      <TitleCard title={"Only on Netflix"} category={"popular"} />
      <TitleCard title={"Upcoming"} category={"upcoming"} />
      <TitleCard title={"Top topic for you"} category={"now_playing"} />
      </div>
      <Footer/>
    </div>
  )
}

export default Home
