import React from 'react';
import "./HomePageStyle.css";
import IntroSection from '../../components/Layout/IntroSection';
import HomeProducts from '../Products/HomeProducts';
import AboutUs from './AboutUs';
function HomePage() {
  return (
    <div>
      <IntroSection/>
      <HomeProducts/>
      <AboutUs/>
    </div>
  )
}

export default HomePage;