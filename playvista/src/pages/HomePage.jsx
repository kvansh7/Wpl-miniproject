// HomePage.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import { mainPhoto } from '../assets';
import Sections from '../components/sections';
import Cards from '../components/cards';
import Footer from '../components/Footer';
import Groupify1 from '../components/Groupify1';
function HomePage() {
  return (
    <div className="bg w-full">
      <Navbar />
      <div className="flex justify-center w-full h-full mainphoto">
        <img src={mainPhoto} alt="mainphoto" />
      </div>
      <div className="flex justify-center">
        <Sections />
      </div>
      <div className="block w-full h-auto">
        <Cards />
      </div>
      <div>
      <Groupify1/>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
